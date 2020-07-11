/**
 * 地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，
 * 每一次只能向左，右，上，下四个方向移动一格，
 * 但是不能进入行坐标和列坐标的数位之和大于k的格子。 
 * 例如，当k为18时，机器人能够进入方格（35,37），因为3+5+3+7 = 18。
 * 但是，它不能进入方格（35,38），因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？
 */
function movingCount(threshold, rows, cols)
{
    let arr = [];
    for(let i = 0; i < rows; i++){
        arr[i] = [];
        for(j = 0; j < cols; j++){
            arr[i][j] = false;
        }
    }
    function move(x, y, threshold, rows, cols, arr){
        if(x < 0 || y < 0 || x >= rows || y >= cols || arr[x][y])
            return 0;
        let sum = getSum(x + y);
        if(sum > threshold){
            return 0;
        }
        else{
            arr[x][y] = true;
            1 + move(x + 1, y, threshold, row, cols, arr)
            + move(x - 1, y, threshold, rows, cols, arr)
            + move(x, y + 1, threshold, rows, cols, arr )
            + move(x, y -1, threshold, rows, cols, arr)
        }
    } 
    function getSum(x){
        let sum = 0; 

        while(x){
            let z = x % 10;
            sum += z;
            x = Math.floor(x/10)
        }
        return sum;
    }
}