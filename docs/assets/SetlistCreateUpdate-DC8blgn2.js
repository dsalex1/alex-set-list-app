var Ue = Object.defineProperty
var Ne = (e, t, s) => (t in e ? Ue(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[t] = s))
var I = (e, t, s) => Ne(e, typeof t != 'symbol' ? t + '' : t, s)
import { u as Oe, _ as Ke } from './sheetBaseDirectory-nsSIru8u.js'
import {
  p as te,
  k as ke,
  m as Ge,
  l as se,
  n as F,
  q as P,
  v as le,
  V as de,
  e as h,
  F as J,
  x as ze,
  y as O,
  I as We,
  z as He,
  A as je,
  B as Xe,
  C as Ye,
  D as qe,
  E as ce,
  G as Je,
  H as Qe,
  J as Ze,
  K as ue,
  L as he,
  M as fe,
  N as et,
  O as tt,
  P as st,
  Q as it,
  i as nt,
  R as rt,
  S as ot,
  T as at,
  U as _,
  W as ge,
  X as lt,
  Y as dt,
  Z as ct,
  _ as me,
  $ as ut,
  a0 as ht,
  a1 as ft,
  a2 as Y,
  o as V,
  c as N,
  a3 as gt,
  h as mt,
  w as x,
  a4 as q,
  a5 as pe,
  a6 as ve,
  g as Se,
  a7 as Te,
  a8 as pt,
  a9 as vt,
  d as Ee,
  r as U,
  j as E,
  f as K,
  t as Q,
  b as z,
  u as yt,
  aa as ye,
  ab as wt,
  ac as bt,
  a as ne,
  ad as It,
  ae as Dt,
  s as we,
  af as xt,
  ag as be,
  ah as Ie,
  ai as Ct,
  aj as kt,
  ak as St,
  al as Tt,
  am as Et,
} from './index-CqN4tnLD.js'
import { u as $t, m as _t, f as Pt, a as Mt } from './helpers-DU00XPo1.js'
import { _ as At } from './AppLayout.vue_vue_type_script_setup_true_lang-oxBXjM_Y.js'
import { _ as Vt } from './plugin-vue_export-helper-DlAUqK2U.js'
import './auth-CN2OG6Db.js'
const Lt = te(
    { ...ke(Ge({ collapseIcon: '$treeviewCollapse', expandIcon: '$treeviewExpand' }), ['subgroup']) },
    'VTreeviewGroup'
  ),
  De = se()({
    name: 'VTreeviewGroup',
    props: Lt(),
    setup(e, t) {
      let { slots: s } = t
      const i = F(),
        n = P(() => {
          var l
          return (l = i.value) != null && l.isOpen ? e.collapseIcon : e.expandIcon
        }),
        a = P(() => {
          var l
          return {
            VTreeviewItem: {
              prependIcon: void 0,
              appendIcon: void 0,
              active: (l = i.value) == null ? void 0 : l.isOpen,
              toggleIcon: n.value,
            },
          }
        })
      return (
        le(() => {
          const l = de.filterProps(e)
          return h(de, O(l, { ref: i, class: ['v-treeview-group', e.class], subgroup: !0 }), {
            ...s,
            activator: s.activator
              ? (d) =>
                  h(J, null, [
                    h(
                      ze,
                      { defaults: a.value },
                      {
                        default: () => {
                          var c
                          return [(c = s.activator) == null ? void 0 : c.call(s, d)]
                        },
                      }
                    ),
                  ])
              : void 0,
          })
        }),
        {}
      )
    },
  }),
  $e = Symbol.for('vuetify:v-treeview'),
  Bt = te({ loading: Boolean, toggleIcon: We, ...He({ slim: !0 }) }, 'VTreeviewItem'),
  oe = se()({
    name: 'VTreeviewItem',
    props: Bt(),
    setup(e, t) {
      let { attrs: s, slots: i, emit: n } = t
      const a = je(e, s),
        l = P(() => (e.value === void 0 ? a.href.value : e.value)),
        d = F(),
        {
          activate: c,
          isActivated: g,
          select: D,
          isSelected: p,
          isIndeterminate: w,
          isGroupActivator: k,
          root: $,
          id: v,
        } = Xe(l, !1),
        S = P(() => $.activatable.value && k),
        { densityClasses: m } = Ye(e, 'v-list-item'),
        r = P(() => ({ isActive: g.value, select: D, isSelected: p.value, isIndeterminate: w.value })),
        o = P(() => {
          var y
          return (
            !e.disabled &&
            e.link !== !1 &&
            (e.link || a.isClickable.value || (e.value != null && !!((y = d.value) != null && y.list)))
          )
        })
      function u(y) {
        var b, M
        !o.value ||
          (!S.value && k) ||
          ($.activatable.value &&
            (S.value
              ? c(!g.value, y)
              : (M = d.value) == null || M.activate(!((b = d.value) != null && b.isActivated), y)))
      }
      function C(y) {
        ;(y.key === 'Enter' || y.key === ' ') && (y.preventDefault(), u(y))
      }
      const T = qe($e, { visibleIds: F() }).visibleIds
      return (
        le(() => {
          var H
          const y = i.title || e.title != null,
            b = i.subtitle || e.subtitle != null,
            M = ce.filterProps(e),
            ie = i.prepend || e.toggleIcon
          return S.value
            ? Je(
                h(
                  'div',
                  {
                    class: [
                      'v-list-item',
                      'v-list-item--one-line',
                      'v-treeview-item',
                      'v-treeview-item--activetable-group-activator',
                      {
                        'v-list-item--active': g.value || p.value,
                        'v-treeview-item--filtered': T.value && !T.value.has(v.value),
                      },
                      m.value,
                      e.class,
                    ],
                    onClick: u,
                  },
                  [
                    h(J, null, [
                      Ze(g.value || p.value, 'v-list-item'),
                      e.toggleIcon &&
                        h(
                          ue,
                          { start: !1 },
                          {
                            default: () => [
                              h(
                                he,
                                {
                                  density: 'compact',
                                  icon: e.toggleIcon,
                                  loading: e.loading,
                                  variant: 'text',
                                  onClick: e.onClick,
                                },
                                {
                                  loader() {
                                    return h(fe, { indeterminate: 'disable-shrink', size: '20', width: '2' }, null)
                                  },
                                }
                              ),
                            ],
                          }
                        ),
                    ]),
                    h('div', { class: 'v-list-item__content', 'data-no-activator': '' }, [
                      y &&
                        h(
                          et,
                          { key: 'title' },
                          {
                            default: () => {
                              var A
                              return [((A = i.title) == null ? void 0 : A.call(i, { title: e.title })) ?? e.title]
                            },
                          }
                        ),
                      b &&
                        h(
                          tt,
                          { key: 'subtitle' },
                          {
                            default: () => {
                              var A
                              return [
                                ((A = i.subtitle) == null ? void 0 : A.call(i, { subtitle: e.subtitle })) ?? e.subtitle,
                              ]
                            },
                          }
                        ),
                      (H = i.default) == null ? void 0 : H.call(i, r.value),
                    ]),
                  ]
                ),
                [[Qe('ripple'), o.value && e.ripple]]
              )
            : h(
                ce,
                O({ ref: d }, M, {
                  class: [
                    'v-treeview-item',
                    { 'v-treeview-item--filtered': T.value && !T.value.has(v.value) },
                    e.class,
                  ],
                  value: v.value,
                  onClick: u,
                  onKeydown: o.value && C,
                }),
                {
                  ...i,
                  prepend: ie
                    ? (A) => {
                        var j
                        return h(J, null, [
                          e.toggleIcon &&
                            h(
                              ue,
                              { start: !1 },
                              {
                                default: () => [
                                  h(
                                    he,
                                    { density: 'compact', icon: e.toggleIcon, loading: e.loading, variant: 'text' },
                                    {
                                      loader() {
                                        return h(fe, { indeterminate: 'disable-shrink', size: '20', width: '2' }, null)
                                      },
                                    }
                                  ),
                                ],
                              }
                            ),
                          (j = i.prepend) == null ? void 0 : j.call(i, A),
                        ])
                      }
                    : void 0,
                }
              )
        }),
        {}
      )
    },
  }),
  _e = te(
    {
      loadChildren: Function,
      loadingIcon: { type: String, default: '$loading' },
      items: Array,
      selectable: Boolean,
      selectStrategy: [String, Function, Object],
    },
    'VTreeviewChildren'
  ),
  Z = se()({
    name: 'VTreeviewChildren',
    props: _e(),
    setup(e, t) {
      let { emit: s, slots: i } = t
      const n = st(null)
      function a(d) {
        return new Promise((c) => {
          var g, D
          if (!((g = e.items) != null && g.length) || !e.loadChildren) return c()
          if (((D = d == null ? void 0 : d.children) == null ? void 0 : D.length) === 0) {
            ;(n.value = d.value), e.loadChildren(d).then(c)
            return
          }
          c()
        }).finally(() => {
          n.value = null
        })
      }
      function l(d, c) {
        e.selectable && d(!c)
      }
      return () => {
        var d, c
        return (
          ((d = i.default) == null ? void 0 : d.call(i)) ??
          ((c = e.items) == null
            ? void 0
            : c.map((g) => {
                var m
                let { children: D, props: p, raw: w } = g
                const k = n.value === w.value,
                  $ = {
                    prepend: (r) => {
                      var o
                      return h(J, null, [
                        e.selectable &&
                          (!D || (D && !['leaf', 'single-leaf'].includes(e.selectStrategy))) &&
                          h('div', null, [
                            h(
                              it,
                              {
                                key: w.value,
                                modelValue: r.isSelected,
                                loading: k,
                                indeterminate: r.isIndeterminate,
                                onClick: nt(() => l(r.select, r.isSelected), ['stop']),
                                onKeydown: (u) => {
                                  ;['Enter', 'Space'].includes(u.key) &&
                                    (u.stopPropagation(), l(r.select, r.isSelected))
                                },
                              },
                              null
                            ),
                          ]),
                        (o = i.prepend) == null ? void 0 : o.call(i, { ...r, item: w }),
                      ])
                    },
                    append: i.append
                      ? (r) => {
                          var o
                          return (o = i.append) == null ? void 0 : o.call(i, { ...r, item: w })
                        }
                      : void 0,
                    title: i.title
                      ? (r) => {
                          var o
                          return (o = i.title) == null ? void 0 : o.call(i, { ...r, item: w })
                        }
                      : void 0,
                  },
                  v = De.filterProps(p),
                  S = Z.filterProps(e)
                return D
                  ? h(De, O({ value: p == null ? void 0 : p.value }, v), {
                      activator: (r) => {
                        let { props: o } = r
                        const u = { ...p, ...o, value: p == null ? void 0 : p.value }
                        return h(oe, O(u, { loading: k, onClick: () => a(w) }), $)
                      },
                      default: () => h(Z, O(S, { items: D }), i),
                    })
                  : ((m = i.item) == null ? void 0 : m.call(i, { props: p })) ?? h(oe, p, $)
              }))
        )
      }
    },
  })
function Pe(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : []
  for (const s of e) t.push(s), s.children && Pe(s.children, t)
  return t
}
const Ft = te(
    {
      openAll: Boolean,
      search: String,
      ...rt({ filterKeys: ['title'] }),
      ..._e(),
      ...ke(ot({ collapseIcon: '$treeviewCollapse', expandIcon: '$treeviewExpand', slim: !0 }), ['nav']),
    },
    'VTreeview'
  ),
  Rt = se()({
    name: 'VTreeview',
    props: Ft(),
    emits: {
      'update:opened': (e) => !0,
      'update:activated': (e) => !0,
      'update:selected': (e) => !0,
      'click:open': (e) => !0,
      'click:select': (e) => !0,
    },
    setup(e, t) {
      let { slots: s } = t
      const { items: i } = at(e),
        n = _(e, 'activeColor'),
        a = _(e, 'baseColor'),
        l = _(e, 'color'),
        d = ge(e, 'activated'),
        c = ge(e, 'selected'),
        g = F(),
        D = P(() => (e.openAll ? m(i.value) : e.opened)),
        p = P(() => Pe(i.value)),
        w = _(e, 'search'),
        { filteredItems: k } = lt(e, p, w),
        $ = P(() => (w.value ? new Set(k.value.flatMap((r) => [...v(r.props.value), ...S(r.props.value)])) : null))
      function v(r) {
        var C
        const o = []
        let u = r
        for (; u != null; ) o.unshift(u), (u = (C = g.value) == null ? void 0 : C.parents.get(u))
        return o
      }
      function S(r) {
        var C, T
        const o = [],
          u = (((C = g.value) == null ? void 0 : C.children.get(r)) ?? []).slice()
        for (; u.length; ) {
          const y = u.shift()
          y && (o.push(y), u.push(...(((T = g.value) == null ? void 0 : T.children.get(y)) ?? []).slice()))
        }
        return o
      }
      function m(r) {
        let o = []
        for (const u of r) u.children && (o.push(u.value), u.children && (o = o.concat(m(u.children))))
        return o
      }
      return (
        dt($e, { visibleIds: $ }),
        ct({
          VTreeviewGroup: {
            activeColor: n,
            baseColor: a,
            color: l,
            collapseIcon: _(e, 'collapseIcon'),
            expandIcon: _(e, 'expandIcon'),
          },
          VTreeviewItem: {
            activeClass: _(e, 'activeClass'),
            activeColor: n,
            baseColor: a,
            color: l,
            density: _(e, 'density'),
            disabled: _(e, 'disabled'),
            lines: _(e, 'lines'),
            variant: _(e, 'variant'),
          },
        }),
        le(() => {
          const r = me.filterProps(e),
            o = Z.filterProps(e)
          return h(
            me,
            O({ ref: g }, r, {
              class: ['v-treeview', e.class],
              style: e.style,
              opened: D.value,
              activated: d.value,
              'onUpdate:activated': (u) => (d.value = u),
              selected: c.value,
              'onUpdate:selected': (u) => (c.value = u),
            }),
            { default: () => [h(Z, O(o, { items: i.value }), s)] }
          )
        }),
        { open }
      )
    },
  })
function Ut(e) {
  return {
    all: (e = e || new Map()),
    on: function (t, s) {
      var i = e.get(t)
      i ? i.push(s) : e.set(t, [s])
    },
    off: function (t, s) {
      var i = e.get(t)
      i && (s ? i.splice(i.indexOf(s) >>> 0, 1) : e.set(t, []))
    },
    emit: function (t, s) {
      var i = e.get(t)
      i &&
        i.slice().map(function (n) {
          n(s)
        }),
        (i = e.get('*')) &&
          i.slice().map(function (n) {
            n(t, s)
          })
    },
  }
}
class Nt {
  constructor() {
    I(this, 'inProgress', !1)
    I(this, 'type', null)
    I(this, 'data', null)
    I(this, 'source', null)
    I(this, 'top', null)
    I(this, 'position', null)
    I(this, 'eventBus', Ut())
    I(this, 'success', null)
  }
  startDrag(t, s, i, n, a, l) {
    ;(this.type = a),
      (this.data = l),
      (this.source = t),
      (this.position = { x: i, y: n }),
      (this.top = null),
      (this.inProgress = !0),
      this.emit(s, 'dragstart'),
      this.emit(s, 'dragtopchanged', { previousTop: null })
  }
  resetVariables() {
    ;(this.inProgress = !1), (this.data = null), (this.source = null), (this.position = null), (this.success = null)
  }
  stopDrag(t) {
    ;(this.success = this.top !== null && this.top.compatibleMode && this.top.dropAllowed),
      this.top !== null && this.emit(t, 'drop'),
      this.emit(t, 'dragend'),
      this.resetVariables()
  }
  cancelDrag(t) {
    ;(this.success = !1), this.emit(t, 'dragend'), this.resetVariables()
  }
  mouseMove(t, s) {
    if (this.inProgress) {
      let i = !1
      const n = this.top
      s === null
        ? ((this.top = null), (i = !0))
        : s.isDropMask
        ? ((this.top = null), (i = !0))
        : s.candidate(this.type, this.data, this.source) && ((this.top = s), (i = !0)),
        i && t.stopPropagation(),
        this.top !== n && this.emit(t.detail.native, 'dragtopchanged', { previousTop: n }),
        (this.position = { x: t.detail.x, y: t.detail.y }),
        this.emit(t.detail.native, 'dragpositionchanged')
    }
  }
  emit(t, s, i = {}) {
    this.eventBus.emit(s, {
      type: this.type,
      data: this.data,
      top: this.top,
      source: this.source,
      position: this.position,
      success: this.success,
      native: t,
      ...i,
    })
  }
  on(t, s) {
    this.eventBus.on(t, s)
  }
  off(t, s) {
    this.eventBus.off(t, s)
  }
}
const f = ut(new Nt())
var Me = {
  data() {
    return { isDropMask: !1 }
  },
  computed: {
    dragInProgress() {
      return f.inProgress
    },
    dragData() {
      return f.data
    },
    dragType() {
      return f.type
    },
    dragPosition() {
      return f.position
    },
    dragSource() {
      return f.source
    },
    dragTop() {
      return f.top
    },
  },
}
function G(e) {
  const t = Ot(e)
  return (
    (t.style.position = 'fixed'),
    (t.style.margin = '0'),
    (t.style['z-index'] = '1000'),
    (t.style.transition = 'opacity 0.2s'),
    t
  )
}
function Ot(e) {
  const t = e.cloneNode(!0)
  xe(e, t)
  const s = e.getElementsByTagName('*'),
    i = t.getElementsByTagName('*')
  for (let n = s.length; n--; ) {
    const a = s[n],
      l = i[n]
    xe(a, l)
  }
  return t
}
function xe(e, t) {
  const s = window.getComputedStyle(e)
  for (const i of s)
    if (i === 'width') {
      const n =
        s.getPropertyValue('box-sizing') === 'border-box'
          ? e.clientWidth
          : e.clientWidth - parseFloat(s.paddingLeft) - parseFloat(s.paddingRight)
      t.style.setProperty('width', n + 'px')
    } else if (i === 'height') {
      const n =
        s.getPropertyValue('box-sizing') === 'border-box'
          ? e.clientHeight
          : e.clientHeight - parseFloat(s.paddingTop) - parseFloat(s.paddingBottom)
      t.style.setProperty('height', n + 'px')
    } else t.style.setProperty(i, s.getPropertyValue(i), s.getPropertyPriority(i))
  t.style.pointerEvents = 'none'
}
const Kt = /(auto|scroll)/,
  re = (e, t) => getComputedStyle(e, null).getPropertyValue(t),
  Gt = (e) => Kt.test(re(e, 'overflow') + re(e, 'overflow-y') + re(e, 'overflow-x')),
  ae = (e) => (!e || e === document.body ? document.body : Gt(e) ? e : ae(e.parentNode))
var Ae = null
function W() {
  clearTimeout(Ae)
}
function zt(e, t, s, i, n) {
  if (!t || !n) return W(), !1
  var a = t.getBoundingClientRect(),
    l = t === document.body,
    d = s - a.left,
    c = i - a.top
  l && ((d = s), (c = i))
  var g = a.width,
    D = a.height
  l && ((g = document.documentElement.clientWidth), (D = document.documentElement.clientHeight))
  var p = n,
    w = n,
    k = D - n,
    $ = g - n,
    v = d < w,
    S = d > $,
    m = c < p,
    r = c > k
  if (!(v || S || m || r)) return W(), !1
  var o = Math.max(t.scrollWidth, t.offsetWidth, t.clientWidth),
    u = Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight),
    C = o - g,
    T = u - D
  ;(function b() {
    W(), y() && (Ae = setTimeout(b, 30))
  })()
  function y() {
    var b = t.scrollLeft,
      M = t.scrollTop
    l && ((b = window.pageXOffset), (M = window.pageYOffset))
    var ie = M > 0,
      H = M < T,
      A = b > 0,
      j = b < C,
      L = b,
      B = M,
      X = 50
    if (v && A) {
      const R = (w - d) / n
      L = L - X * R
    } else if (S && j) {
      const R = (d - $) / n
      L = L + X * R
    }
    if (m && ie) {
      const R = (p - c) / n
      B = B - X * R
    } else if (r && H) {
      const R = (c - k) / n
      B = B + X * R
    }
    return (
      (L = Math.max(0, Math.min(C, L))),
      (B = Math.max(0, Math.min(T, B))),
      L !== b || B !== M ? ((l ? window : t).scrollTo(L, B), !0) : !1
    )
  }
  return !0
}
var Wt = {
    mixins: [Me],
    props: {
      type: { type: String, default: null },
      data: { default: null },
      dragImageOpacity: { type: Number, default: 0.7 },
      disabled: { type: Boolean, default: !1 },
      goBack: { type: Boolean, default: !1 },
      handle: { type: String, default: null },
      delta: { type: Number, default: 0 },
      delay: { type: Number, default: 0 },
      dragClass: { type: String, default: null },
      vibration: { type: Number, default: 0 },
      scrollingEdgeSize: { type: Number, default: 100 },
    },
    emits: ['dragstart', 'dragend', 'cut', 'copy'],
    data() {
      return {
        dragInitialised: !1,
        dragStarted: !1,
        ignoreNextClick: !1,
        initialUserSelect: null,
        downEvent: null,
        startPosition: null,
        delayTimer: null,
        scrollContainer: null,
      }
    },
    computed: {
      cssClasses() {
        const e = { 'dnd-drag': !0 }
        return this.disabled
          ? e
          : {
              ...e,
              'drag-source': this.dragInProgress && this.dragSource === this,
              'drag-mode-copy': this.currentDropMode === 'copy',
              'drag-mode-cut': this.currentDropMode === 'cut',
              'drag-mode-reordering': this.currentDropMode === 'reordering',
              'drag-no-handle': !this.handle,
            }
      },
      currentDropMode() {
        return this.dragInProgress && this.dragSource === this && this.dragTop && this.dragTop.dropAllowed
          ? this.dragTop.reordering
            ? 'reordering'
            : this.dragTop.mode
          : null
      },
    },
    methods: {
      onSelectStart(e) {
        e.stopPropagation(), e.preventDefault()
      },
      performVibration() {
        this.vibration > 0 && window.navigator && window.navigator.vibrate && window.navigator.vibrate(this.vibration)
      },
      onMouseDown(e) {
        let t = null,
          s = !1
        if (e.type === 'mousedown') {
          const n = e
          ;(t = e.target), (s = n.buttons === 1)
        } else (t = e.touches[0].target), (s = !0)
        if (
          !(
            this.disabled ||
            this.downEvent !== null ||
            !s ||
            !(
              !t.matches('.dnd-no-drag, .dnd-no-drag *') &&
              (!this.handle || t.matches(this.handle + ', ' + this.handle + ' *'))
            )
          )
        ) {
          if (
            ((this.scrollContainer = ae(t)),
            (this.initialUserSelect = document.body.style.userSelect),
            (document.documentElement.style.userSelect = 'none'),
            (this.dragStarted = !1),
            (this.downEvent = e),
            this.downEvent.type === 'mousedown')
          ) {
            const n = e
            this.startPosition = { x: n.clientX, y: n.clientY }
          } else {
            const n = e
            this.startPosition = { x: n.touches[0].clientX, y: n.touches[0].clientY }
          }
          this.delay
            ? ((this.dragInitialised = !1),
              clearTimeout(this.delayTimer),
              (this.delayTimer = setTimeout(() => {
                ;(this.dragInitialised = !0), this.performVibration()
              }, this.delay)))
            : ((this.dragInitialised = !0), this.performVibration()),
            document.addEventListener('click', this.onMouseClick, !0),
            document.addEventListener('mouseup', this.onMouseUp),
            document.addEventListener('touchend', this.onMouseUp),
            document.addEventListener('selectstart', this.onSelectStart),
            document.addEventListener('keyup', this.onKeyUp),
            setTimeout(() => {
              document.addEventListener('mousemove', this.onMouseMove),
                document.addEventListener('touchmove', this.onMouseMove, { passive: !1 }),
                document.addEventListener('easy-dnd-move', this.onEasyDnDMove)
            }, 0),
            e.stopPropagation()
        }
      },
      onMouseClick(e) {
        if (this.ignoreNextClick)
          return (
            e.preventDefault(),
            e.stopPropagation && e.stopPropagation(),
            e.stopImmediatePropagation && e.stopImmediatePropagation(),
            (this.ignoreNextClick = !1),
            !1
          )
      },
      onMouseMove(e) {
        if (this.downEvent === null || (this.downEvent.type === 'touchstart' && e.type === 'mousemove')) return
        let t = null,
          s = null,
          i = null
        if (e.type === 'touchmove') {
          const a = e
          if (((s = a.touches[0].clientX), (i = a.touches[0].clientY), (t = document.elementFromPoint(s, i)), !t))
            return
        } else {
          const a = e
          ;(s = a.clientX), (i = a.clientY), (t = a.target)
        }
        const n = Math.sqrt(Math.pow(this.startPosition.x - s, 2) + Math.pow(this.startPosition.y - i, 2))
        if (
          (!this.dragStarted &&
            n > this.delta &&
            (this.dragInitialised
              ? ((this.ignoreNextClick = !0),
                (this.dragStarted = !0),
                f.startDrag(this, this.downEvent, this.startPosition.x, this.startPosition.y, this.type, this.data),
                document.documentElement.classList.add('drag-in-progress'))
              : clearTimeout(this.delayTimer)),
          this.dragStarted)
        ) {
          const a =
            this.dragTop && this.dragTop.$props.scrollingEdgeSize !== void 0
              ? this.dragTop.$props.scrollingEdgeSize
              : this.scrollingEdgeSize
          if (a) {
            const d = this.dragTop ? ae(this.dragTop.$el) : this.scrollContainer
            zt(e, d, s, i, a)
          } else W()
          const l = new CustomEvent('easy-dnd-move', { bubbles: !0, cancelable: !0, detail: { x: s, y: i, native: e } })
          t.dispatchEvent(l)
        }
        this.dragInitialised && e.cancelable && e.preventDefault()
      },
      onEasyDnDMove(e) {
        f.mouseMove(e, null)
      },
      onMouseUp(e) {
        ;(this.downEvent.type === 'touchstart' && e.type === 'mouseup') ||
          setTimeout(() => {
            this.cancelDragActions(), this.dragStarted && f.stopDrag(e), this.finishDrag()
          }, 0)
      },
      onKeyUp(e) {
        e.key === 'Escape' &&
          (this.cancelDragActions(),
          setTimeout(() => {
            f.cancelDrag(e), this.finishDrag()
          }, 0))
      },
      cancelDragActions() {
        ;(this.dragInitialised = !1), clearTimeout(this.delayTimer), W()
      },
      finishDrag() {
        ;(this.downEvent = null),
          (this.scrollContainer = null),
          this.dragStarted && document.documentElement.classList.remove('drag-in-progress'),
          document.removeEventListener('click', this.onMouseClick, !0),
          document.removeEventListener('mousemove', this.onMouseMove),
          document.removeEventListener('touchmove', this.onMouseMove),
          document.removeEventListener('easy-dnd-move', this.onEasyDnDMove),
          document.removeEventListener('mouseup', this.onMouseUp),
          document.removeEventListener('touchend', this.onMouseUp),
          document.removeEventListener('selectstart', this.onSelectStart),
          document.removeEventListener('keyup', this.onKeyUp),
          (document.documentElement.style.userSelect = this.initialUserSelect)
      },
      dndDragStart(e) {
        e.source === this && this.$emit('dragstart', e)
      },
      dndDragEnd(e) {
        e.source === this && this.$emit('dragend', e)
      },
      createDragImage(e) {
        let t
        if (this.$slots['drag-image']) {
          const s = this.$refs['drag-image'] || document.createElement('div')
          s.childElementCount !== 1 ? (t = G(s)) : (t = G(s.children.item(0)))
        } else (t = G(this.$el)), (t.style.transform = e)
        return (
          this.dragClass && t.classList.add(this.dragClass),
          t.classList.add('dnd-ghost'),
          (t.__opacity = this.dragImageOpacity),
          t
        )
      },
    },
    created() {
      f.on('dragstart', this.dndDragStart), f.on('dragend', this.dndDragEnd)
    },
    mounted() {
      this.$el.addEventListener('mousedown', this.onMouseDown),
        this.$el.addEventListener('touchstart', this.onMouseDown)
    },
    beforeUnmount() {
      f.off('dragstart', this.dndDragStart),
        f.off('dragend', this.dndDragEnd),
        this.$el.removeEventListener('mousedown', this.onMouseDown),
        this.$el.removeEventListener('touchstart', this.onMouseDown)
    },
  },
  ee = {
    name: 'Drag',
    mixins: [Wt],
    props: { tag: { type: [String, Object, Function], default: 'div' } },
    computed: {
      dynamicSlots() {
        return Object.entries(this.$slots).filter(([e]) => e !== 'drag-image' && e !== 'default')
      },
    },
  }
const Ht = { key: 0, ref: 'drag-image', class: '__drag-image' }
function jt(e, t, s, i, n, a) {
  return (
    V(),
    N(
      vt(s.tag),
      { class: pt(e.cssClasses) },
      gt(
        {
          default: x(() => [
            q(e.$slots, 'default', pe(ve(e.$slots.default || {}))),
            e.dragInitialised ? (V(), Se('div', Ht, [q(e.$slots, 'drag-image')], 512)) : Te('v-if', !0),
          ]),
          _: 2,
        },
        [mt(a.dynamicSlots, ([l, d]) => ({ name: l, fn: x(() => [q(e.$slots, l, pe(ve(d)))]) }))]
      ),
      1032,
      ['class']
    )
  )
}
ee.render = jt
ee.__scopeId = 'data-v-f87407ce'
function Ve(e) {
  return e.dragInProgress && e.typeAllowed ? e.compatibleMode && e.effectiveAcceptsData(e.dragData, e.dragType) : null
}
function Le(e, t) {
  e.$emit('drop', t), t.source.$emit(e.mode, t)
}
function Be(e, t) {
  return e.effectiveAcceptsType(t)
}
var Xt = {
    mixins: [Me],
    props: {
      acceptsType: { type: [String, Array, Function], default: null },
      acceptsData: { type: Function, default: () => !0 },
      mode: { type: String, default: 'copy' },
      dragImageOpacity: { type: Number, default: 0.7 },
    },
    emits: ['dragover', 'dragenter', 'dragleave', 'dragend', 'drop'],
    data() {
      return { isDrop: !0 }
    },
    computed: {
      compatibleMode() {
        return this.dragInProgress ? !0 : null
      },
      dropIn() {
        return this.dragInProgress ? this.dragTop === this : null
      },
      typeAllowed() {
        return this.dragInProgress ? this.effectiveAcceptsType(this.dragType) : null
      },
      dropAllowed() {
        return Ve(this)
      },
      cssClasses() {
        const e = { 'dnd-drop': !0 }
        return (
          this.dropIn !== null && ((e['drop-in'] = this.dropIn), (e['drop-out'] = !this.dropIn)),
          this.typeAllowed !== null &&
            ((e['type-allowed'] = this.typeAllowed), (e['type-forbidden'] = !this.typeAllowed)),
          this.dropAllowed !== null &&
            ((e['drop-allowed'] = this.dropAllowed), (e['drop-forbidden'] = !this.dropAllowed)),
          e
        )
      },
    },
    methods: {
      effectiveAcceptsType(e) {
        return this.acceptsType === null
          ? !0
          : typeof this.acceptsType == 'string' || typeof this.acceptsType == 'number'
          ? this.acceptsType === e
          : typeof this.acceptsType == 'object' && Array.isArray(this.acceptsType)
          ? this.acceptsType.includes(e)
          : this.acceptsType(e)
      },
      effectiveAcceptsData(e, t) {
        return this.acceptsData(e, t)
      },
      onDragPositionChanged(e) {
        this === e.top && this.$emit('dragover', e)
      },
      onDragTopChanged(e) {
        this === e.top && this.$emit('dragenter', e), this === e.previousTop && this.$emit('dragleave', e)
      },
      onDragEnd(e) {
        this === e.top && this.$emit('dragend', e)
      },
      onDrop(e) {
        this.dropIn && this.compatibleMode && this.dropAllowed && this.doDrop(e)
      },
      doDrop(e) {
        Le(this, e)
      },
      candidate(e) {
        return Be(this, e)
      },
      createDragImage() {
        let e = 'source'
        if (this.$refs['drag-image']) {
          const t = this.$refs['drag-image']
          t.childElementCount !== 1 ? (e = G(t)) : (e = G(t.children.item(0))),
            (e.__opacity = this.dragImageOpacity),
            e.classList.add('dnd-ghost')
        }
        return e
      },
      onDnDMove(e) {
        f.mouseMove(e, this)
      },
    },
    created() {
      f.on('dragpositionchanged', this.onDragPositionChanged),
        f.on('dragtopchanged', this.onDragTopChanged),
        f.on('drop', this.onDrop),
        f.on('dragend', this.onDragEnd)
    },
    mounted() {
      this.$el.addEventListener('easy-dnd-move', this.onDnDMove)
    },
    beforeUnmount() {
      this.$el.removeEventListener('easy-dnd-move', this.onDnDMove),
        f.off('dragpositionchanged', this.onDragPositionChanged),
        f.off('dragtopchanged', this.onDragTopChanged),
        f.off('drop', this.onDrop),
        f.off('dragend', this.onDragEnd)
    },
  },
  Fe = { name: 'DragFeedback' }
const Yt = { class: 'DragFeedback' }
function qt(e, t, s, i, n, a) {
  return V(), Se('div', Yt, [q(e.$slots, 'default')])
}
Fe.render = qt
class Ce {
  constructor(t, s, i, n) {
    I(this, 'reference')
    I(this, 'referenceOriginalPosition')
    I(this, 'magnets', [])
    ;(this.reference = t.item(0).parentNode),
      (this.referenceOriginalPosition = {
        x: this.reference.getBoundingClientRect().left - this.reference.scrollLeft,
        y: this.reference.getBoundingClientRect().top - this.reference.scrollTop,
      })
    let a = 0
    for (const l of t) {
      if (a > s) break
      const d = l.getBoundingClientRect(),
        c = l.classList.contains('dnd-drop') || l.getElementsByClassName('dnd-drop').length > 0
      let g = !1
      if (c) {
        if (i === 'auto') throw "Easy-DnD error : a drop list is missing one of these attributes : 'row' or 'column'."
        g = i === 'row'
      }
      n === null
        ? this.magnets.push(c ? this.before(d, g) : this.center(d))
        : this.magnets.push(c ? (n < a ? this.after : this.before)(d, g) : this.center(d)),
        a++
    }
  }
  center(t) {
    return { x: t.left + t.width / 2, y: t.top + t.height / 2 }
  }
  before(t, s) {
    return s ? { x: t.left, y: t.top + t.height / 2 } : { x: t.left + t.width / 2, y: t.top }
  }
  after(t, s) {
    return s ? { x: t.left + t.width, y: t.top + t.height / 2 } : { x: t.left + t.width / 2, y: t.top + t.height }
  }
  correction() {
    return {
      x: this.reference.getBoundingClientRect().left - this.reference.scrollLeft - this.referenceOriginalPosition.x,
      y: this.reference.getBoundingClientRect().top - this.reference.scrollTop - this.referenceOriginalPosition.y,
    }
  }
  closestIndex(t) {
    const s = t.x - this.correction().x,
      i = t.y - this.correction().y
    let n = 999999,
      a = -1
    for (let l = 0; l < this.magnets.length; l++) {
      const d = this.magnets[l],
        c = Math.sqrt(Math.pow(d.x - s, 2) + Math.pow(d.y - i, 2))
      c < n && ((n = c), (a = l))
    }
    return a
  }
}
class Jt {
  constructor(t, s) {
    I(this, 'from')
    I(this, 'to')
    ;(this.from = t), (this.to = s)
  }
  apply(t) {
    const s = t[this.from]
    t.splice(this.from, 1), t.splice(this.to, 0, s)
  }
}
class Qt {
  constructor(t, s, i) {
    I(this, 'type')
    I(this, 'data')
    I(this, 'index')
    ;(this.type = t), (this.data = s), (this.index = i)
  }
}
var Re = {
  name: 'DropList',
  mixins: [Xt],
  props: {
    tag: { type: [String, Object, Function], default: 'div' },
    items: { type: Array, required: !0 },
    row: { type: Boolean, default: !1 },
    column: { type: Boolean, default: !1 },
    noAnimations: { type: Boolean, default: !1 },
    scrollingEdgeSize: { type: Number, default: void 0 },
  },
  emits: ['reorder', 'insert'],
  data() {
    return { grid: null, forbiddenKeys: [], feedbackKey: null, fromIndex: null }
  },
  computed: {
    rootTag() {
      return this.noAnimations ? this.tag : ft
    },
    rootProps() {
      return this.noAnimations ? {} : { tag: this.tag, css: !1 }
    },
    direction() {
      return this.row ? 'row' : this.column ? 'column' : 'auto'
    },
    reordering() {
      return f.inProgress ? f.source.$el.parentElement === this.$el : null
    },
    closestIndex() {
      return this.grid ? this.grid.closestIndex(f.position) : null
    },
    dropAllowed() {
      return this.dragInProgress
        ? this.reordering
          ? this.items.length > 1
          : Ve(this)
          ? this.forbiddenKeys !== null && this.feedbackKey !== null
            ? !this.forbiddenKeys.includes(this.feedbackKey)
            : !0
          : !1
        : null
    },
    itemsBeforeFeedback() {
      return this.closestIndex === 0 ? [] : this.items.slice(0, this.closestIndex)
    },
    itemsAfterFeedback() {
      return this.closestIndex === this.items.length ? [] : this.items.slice(this.closestIndex)
    },
    itemsBeforeReorderingFeedback() {
      return this.closestIndex <= this.fromIndex
        ? this.items.slice(0, this.closestIndex)
        : this.items.slice(0, this.closestIndex + 1)
    },
    itemsAfterReorderingFeedback() {
      return this.closestIndex <= this.fromIndex
        ? this.items.slice(this.closestIndex)
        : this.items.slice(this.closestIndex + 1)
    },
    reorderedItems() {
      const e = this.closestIndex,
        t = [...this.items],
        s = t[this.fromIndex]
      return t.splice(this.fromIndex, 1), t.splice(e, 0, s), t
    },
    clazz() {
      return {
        'drop-list': !0,
        reordering: this.reordering === !0,
        inserting: this.reordering === !1,
        ...(this.reordering === !1 ? this.cssClasses : { 'dnd-drop': !0 }),
      }
    },
    showDragFeedback() {
      return this.dragInProgress && this.typeAllowed && !this.reordering
    },
    showInsertingDragImage() {
      return this.dragInProgress && this.typeAllowed && !this.reordering && !!this.$slots['drag-image']
    },
    showReorderingDragImage() {
      return this.dragInProgress && this.reordering && !!this.$slots['reordering-drag-image']
    },
    hasReorderingFeedback() {
      return !!this.$slots['reordering-feedback']
    },
    hasEmptySlot() {
      return !!this.$slots.empty
    },
  },
  created() {
    f.on('dragstart', this.onDragStart), f.on('dragend', this.onDragEnd)
  },
  beforeUnmount() {
    f.off('dragstart', this.onDragStart), f.off('dragend', this.onDragEnd)
  },
  methods: {
    refresh() {
      this.$nextTick(() => {
        ;(this.grid = this.computeInsertingGrid()),
          (this.feedbackKey = this.computeFeedbackKey()),
          (this.forbiddenKeys = this.computeForbiddenKeys())
      })
    },
    onDragStart(e) {
      this.candidate(f.type) &&
        (this.reordering
          ? ((this.fromIndex = Array.prototype.indexOf.call(e.source.$el.parentElement.children, e.source.$el)),
            (this.grid = this.computeReorderingGrid()))
          : this.refresh())
    },
    onDragEnd() {
      ;(this.fromIndex = null), (this.feedbackKey = null), (this.forbiddenKeys = null), (this.grid = null)
    },
    doDrop(e) {
      this.reordering
        ? this.fromIndex !== this.closestIndex && this.$emit('reorder', new Jt(this.fromIndex, this.closestIndex))
        : (Le(this, e), this.$emit('insert', new Qt(e.type, e.data, this.closestIndex)))
    },
    candidate(e) {
      return Be(this, e) || this.reordering
    },
    computeForbiddenKeys() {
      return (this.noAnimations ? [] : this.$refs.component.$slots.default())
        .map((e) => e.key)
        .filter((e) => !!e && e !== 'drag-image' && e !== 'drag-feedback')
    },
    computeFeedbackKey() {
      return this.$refs.feedback.$slots.default()[0].key
    },
    computeInsertingGrid() {
      if (this.$refs.feedback.$el.children.length < 1) return null
      const t = this.$refs.feedback.$el.children[0].cloneNode(!0),
        s = this.$el
      s.children.length > this.items.length ? s.insertBefore(t, s.children[this.items.length]) : s.appendChild(t)
      const i = new Ce(s.children, this.items.length, this.direction, null)
      return s.removeChild(t), i
    },
    computeReorderingGrid() {
      return new Ce(this.$el.children, this.items.length - 1, this.direction, this.fromIndex)
    },
    createDragImage() {
      let e
      if (this.$refs['drag-image']) {
        const t = this.$refs['drag-image']
        let s
        t.childElementCount !== 1 ? (s = t) : (s = t.children.item(0))
        const i = s.cloneNode(!0),
          n = this.$el
        n.appendChild(i),
          (e = G(i)),
          n.removeChild(i),
          (e.__opacity = this.dragImageOpacity),
          e.classList.add('dnd-ghost')
      } else e = 'source'
      return e
    },
  },
  render() {
    if (!this.$slots.item) throw 'The "Item" slot must be defined to use DropList'
    if (!this.$slots.feedback) throw 'The "Feedback" slot must be defined to use DropList'
    let e = []
    if (this.dropIn && this.dropAllowed)
      if (this.reordering)
        if (this.hasReorderingFeedback) {
          const t = this.itemsBeforeReorderingFeedback.map(
            (i, n) => this.$slots.item({ item: i, index: n, reorder: !1 })[0]
          )
          t.length > 0 && (e = e.concat(t)),
            e.push(
              this.$slots['reordering-feedback']({ key: 'reordering-feedback', item: this.items[this.fromIndex] })[0]
            )
          const s = this.itemsAfterReorderingFeedback.map(
            (i, n) =>
              this.$slots.item({ item: i, index: this.itemsBeforeReorderingFeedback.length + n, reorder: !1 })[0]
          )
          s.length > 0 && (e = e.concat(s))
        } else {
          const t = this.reorderedItems.map(
            (s, i) => this.$slots.item({ item: s, index: i, reorder: i === this.closestIndex })[0]
          )
          t.length > 0 && (e = e.concat(t))
        }
      else {
        const t = this.itemsBeforeFeedback.map((i, n) => this.$slots.item({ item: i, index: n, reorder: !1 })[0])
        t.length > 0 && (e = e.concat(t)),
          e.push(this.$slots.feedback({ key: 'drag-feedback', data: this.dragData, type: this.dragType })[0])
        const s = this.itemsAfterFeedback.map(
          (i, n) => this.$slots.item({ item: i, index: this.itemsBeforeFeedback.length + n, reorder: !1 })[0]
        )
        s.length > 0 && (e = e.concat(s))
      }
    else {
      const t = this.items.map((s, i) => this.$slots.item({ item: s, index: i, reorder: !1 })[0])
      t.length > 0 ? (e = e.concat(t)) : this.hasEmptySlot && e.push(this.$slots.empty()[0])
    }
    return (
      this.showDragFeedback &&
        e.push(
          Y(
            Fe,
            { class: '__feedback', ref: 'feedback', key: 'drag-feedback' },
            { default: () => this.$slots.feedback({ type: this.dragType, data: this.dragData })[0] }
          )
        ),
      this.showReorderingDragImage &&
        e.push(
          Y(
            'div',
            { class: '__drag-image', ref: 'drag-image', key: 'reordering-drag-image' },
            { default: () => this.$slots['reordering-drag-image']({ item: this.items[this.fromIndex] })[0] }
          )
        ),
      this.showInsertingDragImage &&
        e.push(
          Y(
            'div',
            { class: '__drag-image', ref: 'drag-image', key: 'inserting-drag-image' },
            { default: () => this.$slots['drag-image']({ type: this.dragType, data: this.dragData })[0] }
          )
        ),
      Y(this.rootTag, { ref: 'component', class: this.clazz, ...this.rootProps }, { default: () => e })
    )
  },
}
Re.__scopeId = 'data-v-230f65e3'
class Zt {
  constructor() {
    I(this, 'selfTransform', null)
    I(this, 'clones', null)
    I(this, 'source', null)
    I(this, 'sourcePos', null)
    I(this, 'sourceClone', null)
    f.on('dragstart', this.onDragStart.bind(this)),
      f.on('dragtopchanged', this.onDragTopChanged.bind(this)),
      f.on('dragpositionchanged', this.onDragPositionChanged.bind(this)),
      f.on('dragend', this.onDragEnd.bind(this))
  }
  onDragStart(t) {
    this.cleanUp(),
      (this.sourcePos = { x: t.source.$el.getBoundingClientRect().left, y: t.source.$el.getBoundingClientRect().top }),
      (this.selfTransform =
        'translate(-' + (t.position.x - this.sourcePos.x) + 'px, -' + (t.position.y - this.sourcePos.y) + 'px)'),
      (this.clones = new Map()),
      (this.source = t.source)
  }
  onDragEnd(t) {
    ht().then(() => {
      if (!t.success && this.source && this.source.goBack) {
        const s = this.switch(null)
        window.requestAnimationFrame(() => {
          ;(s.style.transition = 'all 0.5s'),
            window.requestAnimationFrame(() => {
              ;(s.style.left = this.sourcePos.x + 'px'),
                (s.style.top = this.sourcePos.y + 'px'),
                (s.style.transform = 'translate(0,0)')
              const i = () => {
                this.cleanUp(), s.removeEventListener('transitionend', i)
              }
              s.addEventListener('transitionend', i)
            })
        })
      } else this.cleanUp()
    })
  }
  cleanUp() {
    this.clones &&
      this.clones.forEach((t) => {
        t.parentNode === document.body && document.body.removeChild(t)
      }),
      this.sourceClone !== null &&
        this.sourceClone.parentNode === document.body &&
        document.body.removeChild(this.sourceClone),
      (this.selfTransform = null),
      (this.clones = null),
      (this.source = null),
      (this.sourceClone = null),
      (this.sourcePos = null)
  }
  onDragTopChanged(t) {
    this.switch(t.top)
  }
  switch(t) {
    this.clones.forEach((i) => {
      i.style.opacity = '0'
    }),
      this.sourceClone && (this.sourceClone.style.opacity = '0')
    let s
    if (t === null) s = this.getSourceClone()
    else {
      if (!this.clones.has(t)) {
        let i = t.createDragImage(this.selfTransform)
        i === 'source'
          ? (i = this.getSourceClone())
          : i !== null && ((i.style.opacity = '0'), document.body.appendChild(i)),
          this.clones.set(t, i)
      }
      s = this.clones.get(t)
    }
    return s !== null && (s.offsetWidth, (s.style.opacity = s.__opacity), (s.style.visibility = 'visible')), s
  }
  getSourceClone() {
    return (
      this.sourceClone === null &&
        ((this.sourceClone = this.source.createDragImage(this.selfTransform)),
        (this.sourceClone.style.opacity = '0'),
        document.body.appendChild(this.sourceClone)),
      this.sourceClone
    )
  }
  onDragPositionChanged() {
    this.clones.forEach((t) => {
      ;(t.style.left = f.position.x + 'px'), (t.style.top = f.position.y + 'px')
    }),
      this.sourceClone &&
        ((this.sourceClone.style.left = f.position.x + 'px'), (this.sourceClone.style.top = f.position.y + 'px'))
  }
}
new Zt()
const es = z('h3', null, 'Selected files', -1),
  ts = z('h3', null, 'Available files', -1),
  ss = Ee({
    __name: 'FileSelector',
    props: { files: {}, modelValue: {} },
    emits: ['update:modelValue'],
    setup(e, { emit: t }) {
      const s = e,
        n = $t(s, 'modelValue', t)
      function a(c) {
        n.value.splice(c.index, 0, c.data)
      }
      const l = P(() => _t(s.files, (c) => ({ title: c.name }))),
        d = P(() => Pt(l.value, (c) => !n.value.includes(c.title)))
      return (c, g) => {
        const D = U('v-list-item'),
          p = U('v-btn'),
          w = U('v-list'),
          k = U('v-col'),
          $ = U('v-row')
        return (
          V(),
          N($, null, {
            default: x(() => [
              h(
                k,
                { cols: '12', sm: '6', orderSm: '2' },
                {
                  default: x(() => [
                    es,
                    h(
                      w,
                      { density: 'compact' },
                      {
                        default: x(() => [
                          h(
                            E(Re),
                            {
                              items: E(n),
                              class: 'list',
                              onInsert: a,
                              onReorder: g[0] || (g[0] = (v) => v.apply(E(n))),
                            },
                            {
                              empty: x(() => [
                                h(D, { color: 'primary' }, { default: x(() => [K('No files selected')]), _: 1 }),
                              ]),
                              item: x(({ item: v, reorder: S }) => [
                                (V(),
                                N(
                                  E(ee),
                                  { key: v },
                                  {
                                    default: x(() => [
                                      h(
                                        D,
                                        { color: 'primary', active: S },
                                        {
                                          append: x(() => [
                                            h(
                                              p,
                                              {
                                                onClick: (m) => E(n).splice(E(n).indexOf(v), 1),
                                                icon: 'fas fa-close',
                                                variant: 'plain',
                                                style: { height: '32px' },
                                              },
                                              null,
                                              8,
                                              ['onClick']
                                            ),
                                          ]),
                                          default: x(() => [K(Q(v) + ' ', 1)]),
                                          _: 2,
                                        },
                                        1032,
                                        ['active']
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1024
                                )),
                              ]),
                              feedback: x(({ data: v }) => [
                                (V(),
                                N(
                                  D,
                                  { color: 'primary', active: '', key: v },
                                  {
                                    append: x(() => [
                                      h(p, { icon: 'fas fa-close', variant: 'plain', style: { height: '32px' } }),
                                    ]),
                                    default: x(() => [K(Q(v) + ' ', 1)]),
                                    _: 2,
                                  },
                                  1024
                                )),
                              ]),
                              _: 1,
                            },
                            8,
                            ['items']
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }
              ),
              h(
                k,
                { cols: '12', sm: '6', orderSm: '1' },
                {
                  default: x(() => [
                    ts,
                    h(
                      E(Rt),
                      { items: d.value, density: 'compact', class: 'disable-active-underlay' },
                      {
                        item: x(({ props: v }) => [
                          (V(),
                          N(
                            E(ee),
                            { data: v.title, class: 'item', key: v.title },
                            {
                              default: x(() => [
                                h(
                                  E(oe),
                                  {
                                    title: v.title,
                                    onClick: (S) => E(n).push(v.title),
                                    'prepend-icon': 'fas fa-file-pdf',
                                  },
                                  null,
                                  8,
                                  ['title', 'onClick']
                                ),
                              ]),
                              _: 2,
                            },
                            1032,
                            ['data']
                          )),
                        ]),
                        _: 1,
                      },
                      8,
                      ['items']
                    ),
                  ]),
                  _: 1,
                }
              ),
            ]),
            _: 1,
          })
        )
      }
    },
  }),
  is = { class: 'd-flex justify-space-between' },
  ns = Ee({
    __name: 'SetlistCreateUpdate',
    setup(e) {
      const t = yt(ne),
        s = It(),
        i = Dt(),
        n = s.params.id,
        a = n ? 'edit' : 'create',
        l = n ? ye(we, n) : null,
        d = n ? wt(l) : null
      d &&
        bt(d, (m) => {
          m && ((c.value = m), (g.value = m.songs.map((r) => t.value.find((o) => o.id == r).filename)))
        })
      const c = F({ id: '', name: '' }),
        g = F([])
      function D(m) {
        for (var r = [], o = new DataView(m), u = 0; u < o.byteLength; u += 4) {
          var C = o.getUint32(u),
            T = C.toString(16),
            y = '00000000',
            b = (y + T).slice(-y.length)
          r.push(b)
        }
        return r.join('')
      }
      const p = F(''),
        w = F(!1)
      async function k() {
        ;(p.value = ''), (w.value = !0)
        try {
          await Promise.all(
            g.value.map(async (r) => {
              var T, y
              t.value.find((b) => b.filename == r) || (await be(ne, { filename: r, name: r }))
              const o = t.value.find((b) => b.filename == r),
                u = (T = Mt(v.value).find((b) => b.name == r)) == null ? void 0 : T.handle,
                C = D(
                  await window.crypto.subtle.digest(
                    'SHA-256',
                    new Uint8Array(
                      await ((y = await (u == null ? void 0 : u.getFile())) == null ? void 0 : y.arrayBuffer())
                    )
                  )
                )
              if (u && (!o.pdfStorageRef || o.pdfStorageSHA != C)) {
                console.log('Uploading file', r)
                const b = await S(u)
                await Ie(ye(ne, o.id), { filename: r, pdfStorageRef: b.fullPath, pdfStorageSHA: C })
              }
            })
          )
          const m = {
            ...Ct(c.value, 'id', 'songs'),
            songs: g.value.map((r) => t.value.find((o) => o.filename == r).id),
          }
          a == 'create' ? await be(we, m) : await Ie(l, m), i.push('/setlist')
        } catch (m) {
          console.error(m), (p.value = 'An unknown error occurred.')
        }
        w.value = !1
      }
      async function $() {
        if (n) {
          ;(p.value = ''), (w.value = !0)
          try {
            await kt(l), i.push('/setlist')
          } catch (m) {
            console.error(m), (p.value = 'An unknown error occurred.')
          }
          w.value = !1
        }
      }
      const { pdfTree: v } = Oe()
      async function S(m) {
        const r = St(),
          o = Tt(r, m.name)
        return await Et(o, await m.getFile(), { customMetadata: { originalFileName: m.name } }), o
      }
      return (m, r) => {
        const o = U('v-btn'),
          u = U('v-text-field')
        return (
          V(),
          N(At, null, {
            default: x(() => [
              z('h2', is, [
                z('div', null, [
                  h(Ke, { to: E(xt) }, null, 8, ['to']),
                  K(' ' + Q(E(a) == 'create' ? 'Create' : 'Update') + ' Setlist ', 1),
                ]),
                z('div', null, [
                  E(a) == 'edit'
                    ? (V(),
                      N(
                        o,
                        { key: 0, onClick: $, color: 'error', class: 'ms-2', 'prepend-icon': 'fas fa-trash' },
                        { default: x(() => [K(' Delete ')]), _: 1 }
                      ))
                    : Te('', !0),
                  h(
                    o,
                    { loading: w.value, color: 'primary', onClick: k, class: 'ms-2' },
                    { default: x(() => [K(Q(E(a) == 'create' ? 'Create' : 'Update'), 1)]), _: 1 },
                    8,
                    ['loading']
                  ),
                ]),
              ]),
              h(
                u,
                {
                  modelValue: c.value.name,
                  'onUpdate:modelValue': r[0] || (r[0] = (C) => (c.value.name = C)),
                  label: 'Name',
                },
                null,
                8,
                ['modelValue']
              ),
              h(
                ss,
                { modelValue: g.value, 'onUpdate:modelValue': r[1] || (r[1] = (C) => (g.value = C)), files: E(v) },
                null,
                8,
                ['modelValue', 'files']
              ),
            ]),
            _: 1,
          })
        )
      }
    },
  }),
  hs = Vt(ns, [['__scopeId', 'data-v-37e0048e']])
export { hs as default }
