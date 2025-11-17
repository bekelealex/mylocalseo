// Test if your script URL is correct
function testScriptURL() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyOq_o3U5ilKWAnDjc3vuvuklcDcBiwnJEaOn_u_M7CjFlcD9iNtty2J6qWUvsLGhk5dw/exec';
    
    // Test with a simple GET request
    fetch(scriptURL)
        .then(response => response.text())
        .then(text => {
            console.log('Script response:', text);
            alert('Script is accessible: ' + text);
        })
        .catch(error => {
            console.error('Script test failed:', error);
            alert('Script is NOT accessible. Check the URL.');
        });
}

// Run this once to test
testScriptURL();
