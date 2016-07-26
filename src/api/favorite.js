/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-05-09
 * @author Liang <liang@maichong.it>
 */

import service from '../';

export async function create(ctx, next) {
  if (!ctx.user) service.error(403);
  let body = ctx.state.body || ctx.request.body;
  let target = body.target || service.error('missing favorite target');
  let type = body.type || service.error('missing favorite type');
  let title = body.title;
  let pic = body.pic;
  if (!pic || !title) {
    let Model = service.model(type);
    let record = await Model.findCache(target);
    if (!record) service.error('missing favorite target record');
    console.log(Model.titleField);
    body.title = body.title || record.get(Model.title);
    body.pic = body.pic || record.pic || record.avatar;
  }
  await next();
}
