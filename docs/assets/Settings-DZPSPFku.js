import { u as _, _ as i } from './sheetBaseDirectory-BnjYEQ72.js'
import { _ as l } from './AppLayout.vue_vue_type_script_setup_true_lang-B2aB8Sgr.js'
import {
  d as m,
  c as p,
  w as s,
  r as f,
  o as d,
  b as t,
  e as a,
  j as e,
  af as u,
  f as n,
  t as h,
} from './index-DbT-8AG2.js'
import { _ as S } from './plugin-vue_export-helper-DlAUqK2U.js'
import './auth-CbtkUdst.js'
const v = { class: 'd-flex align-center' },
  x = { class: 'mr-2' },
  g = m({
    __name: 'Settings',
    setup(y) {
      const { baseDirectory: o, chooseNewSheetBaseDirectory: r } = _()
      return (B, C) => {
        const c = f('v-btn')
        return (
          d(),
          p(l, null, {
            default: s(() => [
              t('h2', null, [a(i, { to: e(u) }, null, 8, ['to']), n(' Settings ')]),
              t('div', v, [
                t('div', x, 'current sheet path: ' + h(e(o) ? '/' + e(o).name : 'none'), 1),
                a(c, { onClick: e(r), color: 'primary' }, { default: s(() => [n('Select new path')]), _: 1 }, 8, [
                  'onClick',
                ]),
              ]),
            ]),
            _: 1,
          })
        )
      }
    },
  }),
  V = S(g, [['__scopeId', 'data-v-0e32c8f6']])
export { V as default }
