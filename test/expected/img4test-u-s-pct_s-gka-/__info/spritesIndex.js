/* 合图没有按顺序排列，顺序播放需要找到对应的位置序列
* 
* 合图中以单张图片的宽高为基准，从左到右，从上到下排序
* 得到序列 A (如: [1,2,3,4,5])

* 根据序列A中的对应位置，得出顺序播放(文件名顺序)的序列
* (如: [1,3,2,4,5])
*/

var spritesIndex = [0,1,2,3,4,2,1,5]