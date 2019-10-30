'use strict';

const tabbar = require('ui/tabbar');
const win = require('ui/window');

class Plugin {
  constructor(opt) {
    // 创建UI
    let t = new tabbar();
    t.setTitle('phpinfo()');
    t.showLoading();
    let core = new antSword['core'][opt['type']](opt);

    core.request({
      _: 'phpinfo()'
    }).then((_ret) => {
      t.safeHTML(antSword.unxss(_ret['text'])).showLoading(false);
      toastr.success('获取成功！', 'Success');
    }).catch((e) => {
      toastr.error(JSON.stringify(e), 'Error');
      t.close();
    });


    // var w = new win({
    //   view: t.cell.cell
    // });
  }
}

module.exports = Plugin;