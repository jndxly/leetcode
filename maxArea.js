/***
 * 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
 * 画 n 条垂直线，使得垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = 0;
    for(var start = 0, end = height.length - 1; start < end;){

        var h = Math.min(height[start], height[end]);

        var area = h * (end - start);
        if(area > max){
            max = area;
        }
        if(height[start] > height[end]){
            end --;

        }
        else{
            start ++;
        }
    }

    return max;

};
