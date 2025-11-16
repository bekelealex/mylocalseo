// Test if your script URL is correct
function testScriptURL() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwKj91UpEdOaa-7w56UATE9Z5vr4n2DbsrQ_Rl3tbutVmrgaSj7EQgQX-PeTmZ4syP_aw/exec';
    
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
