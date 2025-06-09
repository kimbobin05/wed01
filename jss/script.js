// 카테고리 필터링 함수 
function filterProducts(category) { 
    // 모든 제품 카드 선택 
    const productCards = document.querySelectorAll('.product-card'); 
    // 각 제품 카드에 대해 카테고리 필터링 적용 
    productCards.forEach(card => 
        { // 제품 카드의 data-category 속성을 가져옴 
            const productCategory = card.getAttribute('data-category'); 
            // 선택한 카테고리와 일치하는 경우 표시, 그렇지 않으면 숨김 
            if (category === productCategory || category === 'all') { card.style.display = 'block'; } else { card.style.display = 'none'; } }); }