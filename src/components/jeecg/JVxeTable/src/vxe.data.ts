import { propTypes } from '/@/utils/propTypes'

export const vxeProps = () => ({
  rowKey: propTypes.string.def('id'),
  // 列信息
  columns: {
    type: Array,
    required: true,
  },
  // 数据源
  dataSource: {
    type: Array,
    required: true,
  },
  authPre: {
    type: String,
    required: false,
    default: '',
  },
  // 是否显示工具栏
  toolbar: propTypes.bool.def(false),
  // 工具栏配置
  toolbarConfig: propTypes.object.def(() => ({
    // prefix 前缀；suffix 后缀；
    slots: ['prefix', 'suffix'],
    // add 新增按钮；remove 删除按钮；clearSelection 清空选择按钮；collapse 展开收起
    btns: ['add', 'remove', 'clearSelection'],
  })),
  // 是否显示行号
  rowNumber: propTypes.bool.def(false),
  // 是否可选择行
  rowSelection: propTypes.bool.def(false),
  // 选择行类型
  rowSelectionType: propTypes.oneOf(['checkbox', 'radio']).def('checkbox'),
  // 是否可展开行
  rowExpand: propTypes.bool.def(false),
  // 展开行配置
  expandConfig: propTypes.object.def(() => ({})),
  // 页面是否在加载中
  loading: propTypes.bool.def(false),
  // 表格高度
  height: propTypes.oneOfType([
    propTypes.number,
    propTypes.string,
  ]).def('auto'),
  // 最大高度
  maxHeight: {
    type: Number,
    default: () => null,
  },
  // 要禁用的行
  disabledRows: propTypes.object.def(() => ({})),
  // 是否禁用全部组件
  disabled: propTypes.bool.def(false),
  // 是否可拖拽排序（有固定列的情况下无法拖拽排序，仅可上下排序）
  dragSort: propTypes.bool.def(false),
  // 排序字段保存的Key
  sortKey: propTypes.string.def('orderNum'),
  // 排序序号开始值，默认为 0
  sortBegin: propTypes.number.def(0),
  // 大小，可选值有：medium（中）、small（小）、mini（微）
  size: propTypes.oneOf(['medium', 'small', 'mini']).def('medium'),
  // 是否显示边框线
  bordered: propTypes.bool.def(false),
  // 分页器参数，设置了即可显示分页器
  pagination: propTypes.object.def(() => ({})),
  // 点击行时是否显示子表单
  clickRowShowSubForm: propTypes.bool.def(false),
  // 点击行时是否显示主表单
  clickRowShowMainForm: propTypes.bool.def(false),
  // 是否点击选中行，优先级最低
  clickSelectRow: propTypes.bool.def(false),
  // 是否开启 reload 数据效果
  reloadEffect: propTypes.bool.def(false),
  // 校验规则
  editRules: propTypes.object.def(() => ({})),
  // 是否异步删除行，如果你要实现异步删除，那么需要把这个选项开启，
  // 在remove事件里调用confirmRemove方法才会真正删除（除非删除的全是新增的行）
  asyncRemove: propTypes.bool.def(false),
  // 是否一直显示组件，如果为false则只有点击的时候才出现组件
  // 注：该参数不能动态修改；如果行、列字段多的情况下，会根据机器性能造成不同程度的卡顿。
  // TODO 新版vxe-table取消了 visible 参数，导致无法实现该功能
  alwaysEdit: propTypes.bool.def(false),
  // 联动配置，数组，详情配置见文档
  linkageConfig: propTypes.array.def(() => []),
  // 是否开启使用 webSocket 无痕刷新
  socketReload: propTypes.bool.def(false),
  // 相同的socketKey更改时会互相刷新
  socketKey: propTypes.string.def('vxe-default'),
  // 新增行时切换行的激活状态
  addSetActive: propTypes.bool.def(true),
})

export const vxeEmits = ['save', 'added', 'removed', 'inserted', 'dragged', 'selectRowChange', 'pageChange', 'valueChange']