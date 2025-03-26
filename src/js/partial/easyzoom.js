
// jQuery'yi import et
import $ from 'jquery';
// EasyZoom'u import et
import 'easyzoom';


document.addEventListener("DOMContentLoaded", function () {
    let isInitialized = false;
    let zoomInstances = [];
    const originalHrefs = new Map(); // Orijinal href'leri saklamak için

    function initializeZoom() {
        if (window.innerWidth >= 1024 && !isInitialized) {
            // Her bir easyzoom elementi için
            $('.easyzoom').each(function() {
                const $container = $(this);
                const $link = $container.find('a');
                const $flyout = $container.find('.easyzoom-flyout');
                const $image = $container.find('img');
                
                // Orijinal href'i geri yükle
                const originalHref = originalHrefs.get($link[0]);
                if (originalHref) {
                    $link.attr('href', originalHref);
                }
                
                // Büyük resmi önceden yükle
                const largeImage = new Image();
                largeImage.src = $link.attr('href');
                
                let isZoomed = false;
                
                // Click olduğunda
                const clickHandler = function(e) {
                    e.preventDefault();
                    isZoomed = !isZoomed;
                    
                    if (isZoomed) {
                        $flyout.css('background-image', `url(${largeImage.src})`);
                        $container.addClass('is-zoomed');
                        $flyout.css('opacity', '1');
                    } else {
                        $container.removeClass('is-zoomed');
                        $flyout.css('opacity', '0');
                    }
                };
                
                // Mouse move olduğunda
                const mousemoveHandler = function(e) {
                    if (!isZoomed) return;
                    
                    const offset = $container.offset();
                    const relativeX = e.pageX - offset.left;
                    const relativeY = e.pageY - offset.top;
                    
                    // Container boyutları
                    const containerWidth = $container.width();
                    const containerHeight = $container.height();
                    
                    // Mouse pozisyonunu yüzde olarak hesapla
                    const percentX = (relativeX / containerWidth) * 100;
                    const percentY = (relativeY / containerHeight) * 100;
                    
                    // Background position'ı güncelle
                    $flyout.css('background-position', `${percentX}% ${percentY}%`);
                };

                $container.on('click', clickHandler);
                $container.on('mousemove', mousemoveHandler);

                // Instance'ı kaydet
                zoomInstances.push({
                    container: $container,
                    handlers: {
                        click: clickHandler,
                        mousemove: mousemoveHandler
                    }
                });
            });
            isInitialized = true;
        } else if (window.innerWidth < 1024) {
            // İlk kez 1024px altına iniyorsa orijinal href'leri sakla
            if (isInitialized) {
                // Event listener'ları kaldır ve zoom'u devre dışı bırak
                zoomInstances.forEach(instance => {
                    instance.container.off('click', instance.handlers.click);
                    instance.container.off('mousemove', instance.handlers.mousemove);
                    instance.container.removeClass('is-zoomed');
                    instance.container.find('.easyzoom-flyout').css('opacity', '0');
                });
                zoomInstances = [];
                isInitialized = false;
            }

            // Her easyzoom elementi için href'i değiştir
            $('.easyzoom').each(function() {
                const $link = $(this).find('a');
                // Orijinal href'i sakla (eğer daha önce saklanmamışsa)
                if (!originalHrefs.has($link[0])) {
                    originalHrefs.set($link[0], $link.attr('href'));
                }
                // href'i javascript:void(0); yap
                $link.attr('href', 'javascript:void(0);');
            });
        }
    }

    // Sayfa yüklendiğinde ve ekran boyutu değiştiğinde kontrol et
    initializeZoom();
    window.addEventListener('resize', initializeZoom);
});