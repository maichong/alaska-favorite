/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-05-09
 * @author Liang <liang@maichong.it>
 */

export default class Favorite extends service.Model {

  static label = 'Favorite';
  static defaultColumns = 'pic title user sort createdAt';
  static defaultSort = '-sort';

  static api = {
    list: 3,
    create: 3,
    remove: 3
  };

  static fields = {
    title: {
      label: 'Title',
      type: String,
      require: true
    },
    pic: {
      label: 'Picture',
      type: 'image'
    },
    user: {
      label: 'User',
      ref: 'user.User',
      index: true
    },
    type: {
      //手长目标的模型,例如 alaska-goods.Goods
      label: 'Type',
      type: 'select',
      //options:[{label:'Goods',type:'alaska-goods.Goods'}]
      options: []
    },
    target: {
      //收藏目标记录的ID
      label: 'Target',
      type: String
    },
    createdAt: {
      label: 'Created At',
      type: Date
    }
  };

  preSave() {
    if (!this.createdAt) {
      this.createdAt = new Date;
    }
  }
}
