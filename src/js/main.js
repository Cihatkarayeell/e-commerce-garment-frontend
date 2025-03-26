// Import styles
import '../sass/main.scss';

// Import modules
import './partial/external-link-norefer';
import './partial/blog-pagination';
import './partial/format-tel-link';
import './partial/protect-image';
import './partial/responsive-table';
import './partial/watermark';
import './partial/size-options';
import './partial/quantity-buttons';
import './partial/product-tabs';
import './partial/qa-modal';
import './partial/review-form';
import './partial/sss';
import './partial/basket-quantity';
import './partial/sliding-cart';
import './partial/header';
import './partial/swiper-2';
import './partial/swiper';

import './utilities/dom';
import './utilities/fade-out';
import './utilities/helpers';
import './utilities/replace-broken-image';
import './utilities/smooth-scroll';



// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize basket quantity controls
    // initBasketQuantityControls();
    
    // Log initialization
    console.log('Webpack Frontend Starter Kit loaded!');
    
    // Add modal trigger listener if exists
    const modalTrigger = document.querySelector('.modal-trigger');
    if (modalTrigger) {
        modalTrigger.addEventListener('click', () => {
            // Create and show modal
            const modalContent = document.createElement('div');
            modalContent.className = 'modal';
            modalContent.innerHTML = 'Modal content here';
            document.body.appendChild(modalContent);
        });
    }
    
    // Add tabs functionality if exists
    const tabsContainer = document.querySelector('.tabs');
    if (tabsContainer) {
        const tabs = tabsContainer.querySelectorAll('.tab');
        const panels = tabsContainer.querySelectorAll('.tab-panel');
        
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs and panels
                tabs.forEach(t => t.classList.remove('active'));
                panels.forEach(p => p.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding panel
                tab.classList.add('active');
                panels[index].classList.add('active');
            });
        });
    }
});

// jQuery'yi import et
import $ from 'jquery';
// EasyZoom'u import et
import 'easyzoom';
document.addEventListener("DOMContentLoaded", function () {
    // Her bir easyzoom elementi için
    $('.easyzoom').each(function() {
        const $container = $(this);
        const $flyout = $container.find('.easyzoom-flyout');
        const $link = $container.find('a');
        const $image = $container.find('img');
        
        // Büyük resmi önceden yükle
        const largeImage = new Image();
        largeImage.src = $link.attr('href');
        
        let isZoomed = false;
        
        // Click olduğunda
        $container.on('click', function(e) {
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
        });
        
        // Mouse move olduğunda
        $container.on('mousemove', function(e) {
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
        });
    });
});