/**
 * 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
 * 路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。
 * 如果一条路径经过了矩阵中的某一个格子，则该路径不能再进入该格子。 
   矩阵中包含一条字符串"bcced"的路径，但是矩阵中不包含"abcb"路径，
   因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入该格子。
 */

 //https://www.nowcoder.com/practice/c61c6999eecb4b8f88a98f66b273a3cc?tpId=13&&tqId=11218&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking

function hasPath(matrix, rows, cols, path) {
    let flag = []
    if (!rows || !cols || rows * cols < path.length) return false;
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (getPath(matrix, i, j, 0)) return true;
        }
    }
    return false;
    function getPath(matrix, i, j, k) {
        var index = i * cols + j;
        if (i < 0 || j < 0 || i >= rows || j >= cols || matrix[index] != path[k] || flag[index] == true) return false;
        if (k == path.length - 1) return true;
        flag[index] = true;
        if (getPath(matrix, i - 1, j, k + 1,) ||
            getPath(matrix, i + 1, j, k + 1) ||
            getPath(matrix, i, j - 1, k + 1) ||
            getPath(matrix, i, j + 1, k + 1)
        ) return true;
        flag[index] = false;
        return false;
    }
}