/*给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]



示例 1:

输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出: 3
解释: 节点5和节点1的最近公共祖先是节点3。
示例 2:

输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出: 5
解释: 节点5和节点4的最近公共祖先是节点5。因为根据定义最近公共祖先节点可以为节点本身。
说明:

所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉树中。
问题解析

情况1：根节点为空，直接返回NULL

情况2：p或q中有一个为空，返回非空的那个

情况3：p或q其中一个是另一个的祖先结点，返回是祖先结点的那个

情况4：p和q分别位于他们最近公共结点的两侧
*/

 1 /**
 2  * Definition for a binary tree node.
 3  * struct TreeNode {
 4  *     int val;
 5  *     TreeNode *left;
 6  *     TreeNode *right;
 7  *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 8  * };
 9  */
10 class Solution {
11 public:
12     TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
13         if(root==NULL || root==p || root==q)//base case
14             return root;
15         TreeNode *left = lowestCommonAncestor(root->left, p, q);
16         TreeNode *right = lowestCommonAncestor(root->right, p, q);
17         if(left!=NULL && right!=NULL){
18             return root;
19         }
20         return left!=NULL?left:right;
21     }
22 };