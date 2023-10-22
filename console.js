

function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
      line += '#';
    }
    return line;
  }



  function makeSquare(size) {
    function makeSquare(size) {
        if (size <= 0) {
          return '';
        }
        let square = '';
        for (let i = 0; i < size; i++) {
          for (let j = 0; j < size; j++) {
            square += '#';
          }
          square += '\n';
        }
        return square;
      }

    

      function makeRectangle(width, height) {
        let rectangle = '';
        for (let i = 0; i < height; i++) {
          rectangle += (makeLine(width) + '\n');
        }
        return rectangle.slice(0, -1);
      }
    }


    function makeDownwardStairs(height) {
        let stairs = '';
        for (let i = 0; i < height; i++) {
          stairs += (makeLine(i+1) + '\n');
        }
        return stairs.slice(0, -1);
      }

    

      function makeSpaceLine(numSpaces, numChars) {
        if (numSpaces < 0 || numChars < 0) {
          return ''; 
        }
        let line = '';
        for (let i = 0; i < numSpaces; i++) {
          line += ' ';
        }
        for (let i = 0; i < numChars; i++) {
          line += '#';
        }
        for (let i = 0; i < numSpaces; i++) {
          line += ' ';
        }
      
        return line;
      }
     
      
      function makeIsoscelesTriangle(height) {
        let triangle = '';
        for (let i = 0; i < height; i++) {
          triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
        }
        return triangle.slice(0, -1);
      }

      console.log(makeDiamond(9));

      function makeDiamond(height) {
        if (height <= 0 || height % 2 === 0) {
          return ''; 
        }
      
        let diamond = '';
        let middle = Math.floor(height / 2);
      
        for (let i = 0; i < height; i++) {
          const spaces = Math.abs(i - middle);
          const hashes = height - 2 * spaces;
          diamond += ' '.repeat(spaces) + '#'.repeat(hashes) + '\n';
        }
      
        return diamond;
      }
    
      
    
      