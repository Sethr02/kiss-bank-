let kissCount = localStorage.getItem('kissCount') ? parseInt(localStorage.getItem('kissCount')) : 0;

function updateKissCount() {
    document.querySelector('.kiss-count').textContent = `Kisses: ${kissCount}`;
    localStorage.setItem('kissCount', kissCount);
}

function addKiss() {
    kissCount++;
    updateKissCount();
}

function redeemKiss() {
    if (kissCount > 0) {
        kissCount--;
        updateKissCount();
    } else {
        alert("No kisses to redeem!");
    }
}

window.onload = updateKissCount;