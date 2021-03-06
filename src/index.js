/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-05-09
 * @author Liang <liang@maichong.it>
 */

import alaska from 'alaska';

class FavoriteService extends alaska.Service {
  constructor(options, alaska) {
    options = options || {};
    options.id = options.id || 'alaska-favorite';
    options.dir = options.dir || __dirname;
    super(options, alaska);
  }
}

export default new FavoriteService();
