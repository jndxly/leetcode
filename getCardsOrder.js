/**
 * 我手中有一堆扑克牌， 但是观众不知道它的顺序。
第一步， 我从牌顶拿出一张牌， 放到桌子上。
第二步， 我从牌顶再拿一张牌， 放在手上牌的底部。
第三步， 重复第一步、第二步的操作， 直到我手中所有的牌都放到了桌子上。
最后， 观众可以看到桌子上牌的顺序是：(牌底部）1,2,3,4,5,6,7,8,9,10,11,12,13(牌顶部）
请问， 我刚开始拿在手里的牌的顺序是什么？
请编程实现。

算法解读

 这个题的核心点在于：      

            我从牌顶拿出一张牌， 放到桌子上。

            我从牌顶再拿一张牌， 放在手上牌的底部。

           重复。

使用逆向思维：

           从手上最底部拿出一张牌放在最顶部。

          从桌子上最顶部拿出一张牌放在手上最顶部。

          重复。
 */
function getCardsOrder(input, cards){
    if(cards.length > 0){
        const card = cards.shift();
        cards.push(card)
    }
    if(input.length === 0){
        return cards;
    }
    else{
        const card = input.pop();
        cards.push(card);
        getCardsOrder(input, cards)
    }
}