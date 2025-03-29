fetch ('/data.json')
    .then(response => response.json())
    .then(data => {
        const reviewsContainer = document.getElementById('reviews-container');
        
        const existingPagination = reviewsContainer.querySelector('.reviews-pagination');
        if (existingPagination) {
            existingPagination.remove();
        }

        data.forEach(review =>{
            const reviewItem = document.createElement('div');
            reviewItem.classList.add('review-item');

            // Header kısmı
            const reviewHeader = document.createElement('div');
            reviewHeader.classList.add('review-header');

            const reviewerInfo = document.createElement('div');
            reviewerInfo.classList.add('reviewer-info');

            const name = document.createElement('div');
            name.classList.add('name');
            name.textContent = review.reviewerName;

            // const verified = document.createElement('div');
            // verified.classList.add('verified');
            // if(review.verified){
            //     verified.textContent = 'Verified';
            // }

            const reviewDate = document.createElement('div');
            reviewDate.classList.add('review-date');
            reviewDate.textContent = review.reviewDate;

            reviewerInfo.appendChild(name);
            // reviewerInfo.appendChild(verified);
            reviewerInfo.appendChild(reviewDate);

            reviewHeader.appendChild(reviewerInfo);

            // Review content kısmı
            const reviewContent = document.createElement('div');
            reviewContent.classList.add('review-content');
            const contentParagraph = document.createElement('p');
            contentParagraph.textContent = review.reviewContent;
            reviewContent.appendChild(contentParagraph);

            // Review reply kısmı
            const reviewReply = document.createElement('div');
            reviewReply.classList.add('review-reply');
            
            const replyHeader = document.createElement('div');
            replyHeader.classList.add('reply-header');
            
            const replyFrom = document.createElement('div');
            replyFrom.classList.add('reply-from');
            replyFrom.textContent = `Reply from ${review.replyFrom}`;

            const replyDate = document.createElement('div');
            replyDate.classList.add('reply-date');
            replyDate.textContent = review.replyDate;

            replyHeader.appendChild(replyFrom);
            replyHeader.appendChild(replyDate);

            const replyContent = document.createElement('div');
            replyContent.classList.add('reply-content');
            const replyParagraph = document.createElement('p');
            replyParagraph.textContent = review.replyContent;
            replyContent.appendChild(replyParagraph);

            reviewReply.appendChild(replyHeader);
            reviewReply.appendChild(replyContent);

            // Tüm bölümleri birleştir
            reviewItem.appendChild(reviewHeader);
            reviewItem.appendChild(reviewContent);
            reviewItem.appendChild(reviewReply);

            // Review'i ana konteynere ekle
            reviewsContainer.appendChild(reviewItem);

        })
        if (existingPagination) {
            reviewsContainer.appendChild(existingPagination);
        }
    })
    .catch(error => console.error('Error fetching JSON:', error)); 

