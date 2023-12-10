function showText(event, imageId) {
    const image = event.target;
    const rect = image.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (x >= 0 && x < image.width && y >= 0 && y < image.height) {
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      const context = canvas.getContext('2d');
      context.drawImage(image, 0, 0, image.width, image.height);

      const pixel = context.getImageData(x, y, 1, 1).data;

      if (pixel[3] > 0) {
        var info = document.getElementById('info-' + imageId);

        // Toggle the visibility of the info element
        if (info.style.display === 'block') {
          info.style.display = 'none'; // If already visible, hide it
        } else {
          // Hide all other info elements
          var allInfo = document.querySelectorAll('.info');
          allInfo.forEach(function (otherInfo) {
            otherInfo.style.display = 'none';
          });
    
          info.style.display = 'block'; // Show the clicked info element
          
        }
      } else {
          document.getElementById('outputText').innerText = `You clicked on the transparent background of Image ${imageId}.`;
      }
  }

    // Get the clicked info element
    
  }
