        function diagonalDifference(arr) {
            let primdiag = 0;
            let secdiag = 0;
            for(let i=0; i<arr.length; i++){
                primdiag += arr[i][i]
                secdiag += arr[(arr.length-1)-i][i]
            }
            return Math.abs(primdiag - secdiag)
        }
        
        let arreglo = [[11,2,4],[4,5,6],[10,8,-12]]
        console.log(diagonalDifference(arreglo));
