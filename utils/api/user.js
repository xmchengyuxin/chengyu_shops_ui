export default {
	'getAccountApi': 'member/getAccount',
	'getUserApi': 'member/getUser',
	'userByIdApi': 'member/getUserById',
	'updateHeadImgApi': 'member/updateHeadImg',
	'updateInfo': 'member/updateInfo',
	'viewGoodsListApi': 'member/viewGoods/getList',//足迹列表
	'clearViewGoodsApi': 'member/viewGoods/clear',//清空足迹
	'delViewGoodsApi': 'member/viewGoods/delete',//删除足迹
	'commentListApi': 'member/comment/getList',//获取评价列表
	'commentApi': 'member/comment/comment',//评价
	'addCommentApi': 'member/comment/continuteAdd',//发表追评
	'accountListApi': 'member/account/getList',//资金明细
	'bankListApi': 'member/bank/getList',//获取银行卡列表
	'bankConfigApi': 'common/getBankSelector',//获取银行卡配置
	'bindBankApi': 'member/bank/bind',//绑定银行卡
	'delBankApi': 'member/bank/delete',//删除银行卡
	'rechargeApi': 'member/recharge/online',//在线充值
	'rechargeListApi': 'member/recharge/getList',//充值列表
	'cancelRechargeApi': 'member/recharge/cancel',//取消充值
	'withdrawApi': 'member/withdraw/apply',//申请提现
	'poinListApi': 'member/point/getList',//积分明细
	'chatListApi': 'member/chatSession/getList',//会话列表
	'delChatApi': 'member/chatSession/delete',//删除聊天会话
	'chatNumApi': 'member/chat/countUnReadNum',//统计总未读数量
	'readChatApi': 'member/chat/read',//当前会话置为已读
	'wuliuChatApi': 'member/news/getList',//交易物流消息列表
	'readNewsApi': 'member/news/readAll',//全部置为已读
	'newsNumApi': 'member/news/countNews',//统计未读消息数量
	'getKefuIdApi': 'common/chat/getCustomerId',//获取人工客服和智能客服的ID
	'getOrderNum': 'member/center/count',//获取用户订单数字统计
	'delHistory': 'member/viewGoods/delete',//删除足迹
	'clearHistory': 'member/viewGoods/clear',//清空足迹
}