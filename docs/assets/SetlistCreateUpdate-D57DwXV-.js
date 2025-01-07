var Ne = Object.defineProperty
var Ue = (e, t, s) => (t in e ? Ne(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : (e[t] = s))
var b = (e, t, s) => Ue(e, typeof t != 'symbol' ? t + '' : t, s)
import { u as Oe, _ as Ke } from './sheetBaseDirectory-BnjYEQ72.js'
import {
  p as te,
  k as ke,
  m as Ge,
  l as se,
  n as F,
  q as $,
  v as le,
  V as de,
  e as u,
  F as J,
  x as ze,
  y as O,
  I as We,
  z as je,
  A as He,
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
  U as E,
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
  c as U,
  a3 as gt,
  h as mt,
  w as I,
  a4 as q,
  a5 as pe,
  a6 as ve,
  g as Te,
  a7 as Se,
  a8 as pt,
  a9 as vt,
  d as Ee,
  r as N,
  j as T,
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
  ak as Tt,
  al as St,
  am as Et,
} from './index-DbT-8AG2.js'
import { u as $t, m as _t, f as Pt, a as Mt } from './helpers-Hh-SjjSI.js'
import { _ as At } from './AppLayout.vue_vue_type_script_setup_true_lang-B2aB8Sgr.js'
import { _ as Vt } from './plugin-vue_export-helper-DlAUqK2U.js'
import './auth-CbtkUdst.js'
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
        n = $(() => {
          var o
          return (o = i.value) != null && o.isOpen ? e.collapseIcon : e.expandIcon
        }),
        r = $(() => {
          var o
          return {
            VTreeviewItem: {
              prependIcon: void 0,
              appendIcon: void 0,
              active: (o = i.value) == null ? void 0 : o.isOpen,
              toggleIcon: n.value,
            },
          }
        })
      return (
        le(() => {
          const o = de.filterProps(e)
          return u(de, O(o, { ref: i, class: ['v-treeview-group', e.class], subgroup: !0 }), {
            ...s,
            activator: s.activator
              ? (a) =>
                  u(J, null, [
                    u(
                      ze,
                      { defaults: r.value },
                      {
                        default: () => {
                          var l
                          return [(l = s.activator) == null ? void 0 : l.call(s, a)]
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
  Bt = te({ loading: Boolean, toggleIcon: We, ...je({ slim: !0 }) }, 'VTreeviewItem'),
  oe = se()({
    name: 'VTreeviewItem',
    props: Bt(),
    setup(e, t) {
      let { attrs: s, slots: i, emit: n } = t
      const r = He(e, s),
        o = $(() => (e.value === void 0 ? r.href.value : e.value)),
        a = F(),
        {
          activate: l,
          isActivated: g,
          select: w,
          isSelected: v,
          isIndeterminate: D,
          isGroupActivator: C,
          root: k,
          id: y,
        } = Xe(o, !1),
        m = $(() => k.activatable.value && C),
        { densityClasses: p } = Ye(e, 'v-list-item'),
        d = $(() => ({ isActive: g.value, select: w, isSelected: v.value, isIndeterminate: D.value })),
        c = $(() => {
          var x
          return (
            !e.disabled &&
            e.link !== !1 &&
            (e.link || r.isClickable.value || (e.value != null && !!((x = a.value) != null && x.list)))
          )
        })
      function f(x) {
        var S, M
        !c.value ||
          (!m.value && C) ||
          (k.activatable.value &&
            (m.value
              ? l(!g.value, x)
              : (M = a.value) == null || M.activate(!((S = a.value) != null && S.isActivated), x)))
      }
      function _(x) {
        ;(x.key === 'Enter' || x.key === ' ') && (x.preventDefault(), f(x))
      }
      const P = qe($e, { visibleIds: F() }).visibleIds
      return (
        le(() => {
          var j
          const x = i.title || e.title != null,
            S = i.subtitle || e.subtitle != null,
            M = ce.filterProps(e),
            ie = i.prepend || e.toggleIcon
          return m.value
            ? Je(
                u(
                  'div',
                  {
                    class: [
                      'v-list-item',
                      'v-list-item--one-line',
                      'v-treeview-item',
                      'v-treeview-item--activetable-group-activator',
                      {
                        'v-list-item--active': g.value || v.value,
                        'v-treeview-item--filtered': P.value && !P.value.has(y.value),
                      },
                      p.value,
                      e.class,
                    ],
                    onClick: f,
                  },
                  [
                    u(J, null, [
                      Ze(g.value || v.value, 'v-list-item'),
                      e.toggleIcon &&
                        u(
                          ue,
                          { start: !1 },
                          {
                            default: () => [
                              u(
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
                                    return u(fe, { indeterminate: 'disable-shrink', size: '20', width: '2' }, null)
                                  },
                                }
                              ),
                            ],
                          }
                        ),
                    ]),
                    u('div', { class: 'v-list-item__content', 'data-no-activator': '' }, [
                      x &&
                        u(
                          et,
                          { key: 'title' },
                          {
                            default: () => {
                              var A
                              return [((A = i.title) == null ? void 0 : A.call(i, { title: e.title })) ?? e.title]
                            },
                          }
                        ),
                      S &&
                        u(
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
                      (j = i.default) == null ? void 0 : j.call(i, d.value),
                    ]),
                  ]
                ),
                [[Qe('ripple'), c.value && e.ripple]]
              )
            : u(
                ce,
                O({ ref: a }, M, {
                  class: [
                    'v-treeview-item',
                    { 'v-treeview-item--filtered': P.value && !P.value.has(y.value) },
                    e.class,
                  ],
                  value: y.value,
                  onClick: f,
                  onKeydown: c.value && _,
                }),
                {
                  ...i,
                  prepend: ie
                    ? (A) => {
                        var H
                        return u(J, null, [
                          e.toggleIcon &&
                            u(
                              ue,
                              { start: !1 },
                              {
                                default: () => [
                                  u(
                                    he,
                                    { density: 'compact', icon: e.toggleIcon, loading: e.loading, variant: 'text' },
                                    {
                                      loader() {
                                        return u(fe, { indeterminate: 'disable-shrink', size: '20', width: '2' }, null)
                                      },
                                    }
                                  ),
                                ],
                              }
                            ),
                          (H = i.prepend) == null ? void 0 : H.call(i, A),
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
      function r(a) {
        return new Promise((l) => {
          var g, w
          if (!((g = e.items) != null && g.length) || !e.loadChildren) return l()
          if (((w = a == null ? void 0 : a.children) == null ? void 0 : w.length) === 0) {
            ;(n.value = a.value), e.loadChildren(a).then(l)
            return
          }
          l()
        }).finally(() => {
          n.value = null
        })
      }
      function o(a, l) {
        e.selectable && a(!l)
      }
      return () => {
        var a, l
        return (
          ((a = i.default) == null ? void 0 : a.call(i)) ??
          ((l = e.items) == null
            ? void 0
            : l.map((g) => {
                var p
                let { children: w, props: v, raw: D } = g
                const C = n.value === D.value,
                  k = {
                    prepend: (d) => {
                      var c
                      return u(J, null, [
                        e.selectable &&
                          (!w || (w && !['leaf', 'single-leaf'].includes(e.selectStrategy))) &&
                          u('div', null, [
                            u(
                              it,
                              {
                                key: D.value,
                                modelValue: d.isSelected,
                                loading: C,
                                indeterminate: d.isIndeterminate,
                                onClick: nt(() => o(d.select, d.isSelected), ['stop']),
                                onKeydown: (f) => {
                                  ;['Enter', 'Space'].includes(f.key) &&
                                    (f.stopPropagation(), o(d.select, d.isSelected))
                                },
                              },
                              null
                            ),
                          ]),
                        (c = i.prepend) == null ? void 0 : c.call(i, { ...d, item: D }),
                      ])
                    },
                    append: i.append
                      ? (d) => {
                          var c
                          return (c = i.append) == null ? void 0 : c.call(i, { ...d, item: D })
                        }
                      : void 0,
                    title: i.title
                      ? (d) => {
                          var c
                          return (c = i.title) == null ? void 0 : c.call(i, { ...d, item: D })
                        }
                      : void 0,
                  },
                  y = De.filterProps(v),
                  m = Z.filterProps(e)
                return w
                  ? u(De, O({ value: v == null ? void 0 : v.value }, y), {
                      activator: (d) => {
                        let { props: c } = d
                        const f = { ...v, ...c, value: v == null ? void 0 : v.value }
                        return u(oe, O(f, { loading: C, onClick: () => r(D) }), k)
                      },
                      default: () => u(Z, O(m, { items: w }), i),
                    })
                  : ((p = i.item) == null ? void 0 : p.call(i, { props: v })) ?? u(oe, v, k)
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
        n = E(e, 'activeColor'),
        r = E(e, 'baseColor'),
        o = E(e, 'color'),
        a = ge(e, 'activated'),
        l = ge(e, 'selected'),
        g = F(),
        w = $(() => (e.openAll ? p(i.value) : e.opened)),
        v = $(() => Pe(i.value)),
        D = E(e, 'search'),
        { filteredItems: C } = lt(e, v, D),
        k = $(() => (D.value ? new Set(C.value.flatMap((d) => [...y(d.props.value), ...m(d.props.value)])) : null))
      function y(d) {
        var _
        const c = []
        let f = d
        for (; f != null; ) c.unshift(f), (f = (_ = g.value) == null ? void 0 : _.parents.get(f))
        return c
      }
      function m(d) {
        var _, P
        const c = [],
          f = (((_ = g.value) == null ? void 0 : _.children.get(d)) ?? []).slice()
        for (; f.length; ) {
          const x = f.shift()
          x && (c.push(x), f.push(...(((P = g.value) == null ? void 0 : P.children.get(x)) ?? []).slice()))
        }
        return c
      }
      function p(d) {
        let c = []
        for (const f of d) f.children && (c.push(f.value), f.children && (c = c.concat(p(f.children))))
        return c
      }
      return (
        dt($e, { visibleIds: k }),
        ct({
          VTreeviewGroup: {
            activeColor: n,
            baseColor: r,
            color: o,
            collapseIcon: E(e, 'collapseIcon'),
            expandIcon: E(e, 'expandIcon'),
          },
          VTreeviewItem: {
            activeClass: E(e, 'activeClass'),
            activeColor: n,
            baseColor: r,
            color: o,
            density: E(e, 'density'),
            disabled: E(e, 'disabled'),
            lines: E(e, 'lines'),
            variant: E(e, 'variant'),
          },
        }),
        le(() => {
          const d = me.filterProps(e),
            c = Z.filterProps(e)
          return u(
            me,
            O({ ref: g }, d, {
              class: ['v-treeview', e.class],
              style: e.style,
              opened: w.value,
              activated: a.value,
              'onUpdate:activated': (f) => (a.value = f),
              selected: l.value,
              'onUpdate:selected': (f) => (l.value = f),
            }),
            { default: () => [u(Z, O(c, { items: i.value }), s)] }
          )
        }),
        { open }
      )
    },
  })
function Nt(e) {
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
class Ut {
  constructor() {
    b(this, 'inProgress', !1)
    b(this, 'type', null)
    b(this, 'data', null)
    b(this, 'source', null)
    b(this, 'top', null)
    b(this, 'position', null)
    b(this, 'eventBus', Nt())
    b(this, 'success', null)
  }
  startDrag(t, s, i, n, r, o) {
    ;(this.type = r),
      (this.data = o),
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
const h = ut(new Ut())
var Me = {
  data() {
    return { isDropMask: !1 }
  },
  computed: {
    dragInProgress() {
      return h.inProgress
    },
    dragData() {
      return h.data
    },
    dragType() {
      return h.type
    },
    dragPosition() {
      return h.position
    },
    dragSource() {
      return h.source
    },
    dragTop() {
      return h.top
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
    const r = s[n],
      o = i[n]
    xe(r, o)
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
  var r = t.getBoundingClientRect(),
    o = t === document.body,
    a = s - r.left,
    l = i - r.top
  o && ((a = s), (l = i))
  var g = r.width,
    w = r.height
  o && ((g = document.documentElement.clientWidth), (w = document.documentElement.clientHeight))
  var v = n,
    D = n,
    C = w - n,
    k = g - n,
    y = a < D,
    m = a > k,
    p = l < v,
    d = l > C
  if (!(y || m || p || d)) return W(), !1
  var c = Math.max(t.scrollWidth, t.offsetWidth, t.clientWidth),
    f = Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight),
    _ = c - g,
    P = f - w
  ;(function S() {
    W(), x() && (Ae = setTimeout(S, 30))
  })()
  function x() {
    var S = t.scrollLeft,
      M = t.scrollTop
    o && ((S = window.pageXOffset), (M = window.pageYOffset))
    var ie = M > 0,
      j = M < P,
      A = S > 0,
      H = S < _,
      L = S,
      B = M,
      X = 50
    if (y && A) {
      const R = (D - a) / n
      L = L - X * R
    } else if (m && H) {
      const R = (a - k) / n
      L = L + X * R
    }
    if (p && ie) {
      const R = (v - l) / n
      B = B - X * R
    } else if (d && j) {
      const R = (l - C) / n
      B = B + X * R
    }
    return (
      (L = Math.max(0, Math.min(_, L))),
      (B = Math.max(0, Math.min(P, B))),
      L !== S || B !== M ? ((o ? window : t).scrollTo(L, B), !0) : !1
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
          const r = e
          if (((s = r.touches[0].clientX), (i = r.touches[0].clientY), (t = document.elementFromPoint(s, i)), !t))
            return
        } else {
          const r = e
          ;(s = r.clientX), (i = r.clientY), (t = r.target)
        }
        const n = Math.sqrt(Math.pow(this.startPosition.x - s, 2) + Math.pow(this.startPosition.y - i, 2))
        if (
          (!this.dragStarted &&
            n > this.delta &&
            (this.dragInitialised
              ? ((this.ignoreNextClick = !0),
                (this.dragStarted = !0),
                h.startDrag(this, this.downEvent, this.startPosition.x, this.startPosition.y, this.type, this.data),
                document.documentElement.classList.add('drag-in-progress'))
              : clearTimeout(this.delayTimer)),
          this.dragStarted)
        ) {
          const r =
            this.dragTop && this.dragTop.$props.scrollingEdgeSize !== void 0
              ? this.dragTop.$props.scrollingEdgeSize
              : this.scrollingEdgeSize
          if (r) {
            const a = this.dragTop ? ae(this.dragTop.$el) : this.scrollContainer
            zt(e, a, s, i, r)
          } else W()
          const o = new CustomEvent('easy-dnd-move', { bubbles: !0, cancelable: !0, detail: { x: s, y: i, native: e } })
          t.dispatchEvent(o)
        }
        this.dragInitialised && e.cancelable && e.preventDefault()
      },
      onEasyDnDMove(e) {
        h.mouseMove(e, null)
      },
      onMouseUp(e) {
        ;(this.downEvent.type === 'touchstart' && e.type === 'mouseup') ||
          setTimeout(() => {
            this.cancelDragActions(), this.dragStarted && h.stopDrag(e), this.finishDrag()
          }, 0)
      },
      onKeyUp(e) {
        e.key === 'Escape' &&
          (this.cancelDragActions(),
          setTimeout(() => {
            h.cancelDrag(e), this.finishDrag()
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
      h.on('dragstart', this.dndDragStart), h.on('dragend', this.dndDragEnd)
    },
    mounted() {
      this.$el.addEventListener('mousedown', this.onMouseDown),
        this.$el.addEventListener('touchstart', this.onMouseDown)
    },
    beforeUnmount() {
      h.off('dragstart', this.dndDragStart),
        h.off('dragend', this.dndDragEnd),
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
const jt = { key: 0, ref: 'drag-image', class: '__drag-image' }
function Ht(e, t, s, i, n, r) {
  return (
    V(),
    U(
      vt(s.tag),
      { class: pt(e.cssClasses) },
      gt(
        {
          default: I(() => [
            q(e.$slots, 'default', pe(ve(e.$slots.default || {}))),
            e.dragInitialised ? (V(), Te('div', jt, [q(e.$slots, 'drag-image')], 512)) : Se('v-if', !0),
          ]),
          _: 2,
        },
        [mt(r.dynamicSlots, ([o, a]) => ({ name: o, fn: I(() => [q(e.$slots, o, pe(ve(a)))]) }))]
      ),
      1032,
      ['class']
    )
  )
}
ee.render = Ht
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
        h.mouseMove(e, this)
      },
    },
    created() {
      h.on('dragpositionchanged', this.onDragPositionChanged),
        h.on('dragtopchanged', this.onDragTopChanged),
        h.on('drop', this.onDrop),
        h.on('dragend', this.onDragEnd)
    },
    mounted() {
      this.$el.addEventListener('easy-dnd-move', this.onDnDMove)
    },
    beforeUnmount() {
      this.$el.removeEventListener('easy-dnd-move', this.onDnDMove),
        h.off('dragpositionchanged', this.onDragPositionChanged),
        h.off('dragtopchanged', this.onDragTopChanged),
        h.off('drop', this.onDrop),
        h.off('dragend', this.onDragEnd)
    },
  },
  Fe = { name: 'DragFeedback' }
const Yt = { class: 'DragFeedback' }
function qt(e, t, s, i, n, r) {
  return V(), Te('div', Yt, [q(e.$slots, 'default')])
}
Fe.render = qt
class Ce {
  constructor(t, s, i, n) {
    b(this, 'reference')
    b(this, 'referenceOriginalPosition')
    b(this, 'magnets', [])
    ;(this.reference = t.item(0).parentNode),
      (this.referenceOriginalPosition = {
        x: this.reference.getBoundingClientRect().left - this.reference.scrollLeft,
        y: this.reference.getBoundingClientRect().top - this.reference.scrollTop,
      })
    let r = 0
    for (const o of t) {
      if (r > s) break
      const a = o.getBoundingClientRect(),
        l = o.classList.contains('dnd-drop') || o.getElementsByClassName('dnd-drop').length > 0
      let g = !1
      if (l) {
        if (i === 'auto') throw "Easy-DnD error : a drop list is missing one of these attributes : 'row' or 'column'."
        g = i === 'row'
      }
      n === null
        ? this.magnets.push(l ? this.before(a, g) : this.center(a))
        : this.magnets.push(l ? (n < r ? this.after : this.before)(a, g) : this.center(a)),
        r++
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
      r = -1
    for (let o = 0; o < this.magnets.length; o++) {
      const a = this.magnets[o],
        l = Math.sqrt(Math.pow(a.x - s, 2) + Math.pow(a.y - i, 2))
      l < n && ((n = l), (r = o))
    }
    return r
  }
}
class Jt {
  constructor(t, s) {
    b(this, 'from')
    b(this, 'to')
    ;(this.from = t), (this.to = s)
  }
  apply(t) {
    const s = t[this.from]
    t.splice(this.from, 1), t.splice(this.to, 0, s)
  }
}
class Qt {
  constructor(t, s, i) {
    b(this, 'type')
    b(this, 'data')
    b(this, 'index')
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
      return h.inProgress ? h.source.$el.parentElement === this.$el : null
    },
    closestIndex() {
      return this.grid ? this.grid.closestIndex(h.position) : null
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
    h.on('dragstart', this.onDragStart), h.on('dragend', this.onDragEnd)
  },
  beforeUnmount() {
    h.off('dragstart', this.onDragStart), h.off('dragend', this.onDragEnd)
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
      this.candidate(h.type) &&
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
    b(this, 'selfTransform', null)
    b(this, 'clones', null)
    b(this, 'source', null)
    b(this, 'sourcePos', null)
    b(this, 'sourceClone', null)
    h.on('dragstart', this.onDragStart.bind(this)),
      h.on('dragtopchanged', this.onDragTopChanged.bind(this)),
      h.on('dragpositionchanged', this.onDragPositionChanged.bind(this)),
      h.on('dragend', this.onDragEnd.bind(this))
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
      ;(t.style.left = h.position.x + 'px'), (t.style.top = h.position.y + 'px')
    }),
      this.sourceClone &&
        ((this.sourceClone.style.left = h.position.x + 'px'), (this.sourceClone.style.top = h.position.y + 'px'))
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
      function r(l) {
        n.value.splice(l.index, 0, l.data)
      }
      const o = $(() => _t(s.files, (l) => ({ title: l.name }))),
        a = $(() => Pt(o.value, (l) => !n.value.includes(l.title)))
      return (l, g) => {
        const w = N('v-list-item'),
          v = N('v-btn'),
          D = N('v-list'),
          C = N('v-col'),
          k = N('v-row')
        return (
          V(),
          U(k, null, {
            default: I(() => [
              u(
                C,
                { cols: '12', sm: '6', orderSm: '2' },
                {
                  default: I(() => [
                    es,
                    u(
                      D,
                      { density: 'compact' },
                      {
                        default: I(() => [
                          u(
                            T(Re),
                            {
                              items: T(n),
                              class: 'list',
                              onInsert: r,
                              onReorder: g[0] || (g[0] = (y) => y.apply(T(n))),
                            },
                            {
                              empty: I(() => [
                                u(w, { color: 'primary' }, { default: I(() => [K('No files selected')]), _: 1 }),
                              ]),
                              item: I(({ item: y, reorder: m }) => [
                                (V(),
                                U(
                                  T(ee),
                                  { key: y },
                                  {
                                    default: I(() => [
                                      u(
                                        w,
                                        { color: 'primary', active: m },
                                        {
                                          append: I(() => [
                                            u(
                                              v,
                                              {
                                                onClick: (p) => T(n).splice(T(n).indexOf(y), 1),
                                                icon: 'fas fa-close',
                                                variant: 'plain',
                                                style: { height: '32px' },
                                              },
                                              null,
                                              8,
                                              ['onClick']
                                            ),
                                          ]),
                                          default: I(() => [K(Q(y) + ' ', 1)]),
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
                              feedback: I(({ data: y }) => [
                                (V(),
                                U(
                                  w,
                                  { color: 'primary', active: '', key: y },
                                  {
                                    append: I(() => [
                                      u(v, { icon: 'fas fa-close', variant: 'plain', style: { height: '32px' } }),
                                    ]),
                                    default: I(() => [K(Q(y) + ' ', 1)]),
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
              u(
                C,
                { cols: '12', sm: '6', orderSm: '1' },
                {
                  default: I(() => [
                    ts,
                    u(
                      T(Rt),
                      { items: a.value, density: 'compact', class: 'disable-active-underlay' },
                      {
                        item: I(({ props: y }) => [
                          (V(),
                          U(
                            T(ee),
                            { data: y.title, class: 'item', key: y.title },
                            {
                              default: I(() => [
                                u(
                                  T(oe),
                                  {
                                    title: y.title,
                                    onClick: (m) => T(n).push(y.title),
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
        r = n ? 'edit' : 'create',
        o = n ? ye(we, n) : null,
        a = n ? wt(o) : null
      a &&
        bt(a, (m) => {
          m && ((l.value = m), (g.value = m.songs.map((p) => t.value.find((d) => d.id == p).filename)))
        })
      const l = F({ id: '', name: '' }),
        g = F([]),
        w = F(''),
        v = F(!1)
      async function D() {
        ;(w.value = ''), (v.value = !0)
        try {
          await Promise.all(
            g.value.map(async (p) => {
              t.value.find((c) => c.filename == p) || (await be(ne, { filename: p, name: p }))
              const d = t.value.find((c) => c.filename == p)
              if (!d.pdfStorageRef) {
                const c = await y(Mt(k.value).find((f) => f.name == p).handle, d.id)
                await Ie(ye(ne, d.id), { filename: p, pdfStorageRef: c.fullPath })
              }
            })
          )
          const m = {
            ...Ct(l.value, 'id', 'songs'),
            songs: g.value.map((p) => t.value.find((d) => d.filename == p).id),
          }
          r == 'create' ? await be(we, m) : await Ie(o, m), i.push('/setlist')
        } catch (m) {
          console.error(m), (w.value = 'An unknown error occurred.')
        }
        v.value = !1
      }
      async function C() {
        if (n) {
          ;(w.value = ''), (v.value = !0)
          try {
            await kt(o), i.push('/setlist')
          } catch (m) {
            console.error(m), (w.value = 'An unknown error occurred.')
          }
          v.value = !1
        }
      }
      const { pdfTree: k } = Oe()
      async function y(m, p) {
        const d = Tt(),
          c = St(d, p + '/' + m.name)
        return await Et(c, await m.getFile(), { customMetadata: { originalFileName: m.name } }), c
      }
      return (m, p) => {
        const d = N('v-btn'),
          c = N('v-text-field')
        return (
          V(),
          U(At, null, {
            default: I(() => [
              z('h2', is, [
                z('div', null, [
                  u(Ke, { to: T(xt) }, null, 8, ['to']),
                  K(' ' + Q(T(r) == 'create' ? 'Create' : 'Update') + ' Setlist ', 1),
                ]),
                z('div', null, [
                  T(r) == 'edit'
                    ? (V(),
                      U(
                        d,
                        { key: 0, onClick: C, color: 'error', class: 'ms-2', 'prepend-icon': 'fas fa-trash' },
                        { default: I(() => [K(' Delete ')]), _: 1 }
                      ))
                    : Se('', !0),
                  u(
                    d,
                    { loading: v.value, color: 'primary', onClick: D, class: 'ms-2' },
                    { default: I(() => [K(Q(T(r) == 'create' ? 'Create' : 'Update'), 1)]), _: 1 },
                    8,
                    ['loading']
                  ),
                ]),
              ]),
              u(
                c,
                {
                  modelValue: l.value.name,
                  'onUpdate:modelValue': p[0] || (p[0] = (f) => (l.value.name = f)),
                  label: 'Name',
                },
                null,
                8,
                ['modelValue']
              ),
              u(
                ss,
                { modelValue: g.value, 'onUpdate:modelValue': p[1] || (p[1] = (f) => (g.value = f)), files: T(k) },
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
  hs = Vt(ns, [['__scopeId', 'data-v-d430e833']])
export { hs as default }
