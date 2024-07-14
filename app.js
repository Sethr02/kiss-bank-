let tokenCount = localStorage.getItem('tokenCount') ? parseInt(localStorage.getItem('tokenCount')) : 0;

function updateTokenCount() {
    document.querySelector('.token-count').textContent = `NanaTokens: ${tokenCount}`;
    localStorage.setItem('tokenCount', tokenCount);
}

function addToken() {
    tokenCount++;
    updateTokenCount();
}

function redeemToken() {
    if (tokenCount > 0) {
        tokenCount--;
        updateTokenCount();
    } else {
        alert("No NanaTokens to redeem!");
    }
}

window.onload = updateTokenCount;
