const sss = document.getElementsByClassName('accordion');

if(sss){
    document.addEventListener('DOMContentLoaded', function() {
        const accordionHeaders = document.querySelectorAll('.accordion-header');
        
        function closeAllAccordions() {
            document.querySelectorAll('.accordion-content').forEach(content => {
                content.style.height = '0px';
                content.classList.remove('active');
            });
            
            document.querySelectorAll('.accordion-header').forEach(header => {
                header.classList.remove('active');
            });
        }
        
        accordionHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const content = this.nextElementSibling;
                const isActive = content.classList.contains('active');
                
                // Close all accordions first
                closeAllAccordions();
                
                // If it wasn't active, open this one
                if (!isActive) {
                    // Add active classes
                    this.classList.add('active');
                    content.classList.add('active');
                    
                    // Set content height
                    content.style.height = content.scrollHeight + 'px';
                }
            });
        });
    });
}
