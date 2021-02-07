import Vue from "vue";
import "@/assets/element-variables.scss";

// Pedantic import saves space in the final compiled project
import {
  // Alert,
  // Aside,
  // Autocomplete,
  // Backtop,
  // Badge,
  // Breadcrumb,
  // BreadcrumbItem,
  Button,
  // ButtonGroup,
  // Calendar,
  // Card,
  // Carousel,
  // CarouselItem,
  // Cascader,
  // CascaderPanel,
  // Checkbox,
  // CheckboxButton,
  // CheckboxGroup,
  // Col,
  // Collapse,
  // CollapseItem,
  // ColorPicker,
  // Container,
  // DatePicker,
  // Dialog,
  // Divider,
  // Dropdown,
  // DropdownItem,
  // DropdownMenu,
  // Footer,
  // Form,
  // FormItem,
  // Header,
  // InfiniteScroll,
  // Icon,
  // Image,
  // Input,
  // InputNumber,
  // Link,
  Loading,
  // Main,
  // Menu,
  // MenuItem,
  // MenuItemGroup,
  Message,
  // MessageBox,
  // Notification,
  // Option,
  // OptionGroup,
  // PageHeader,
  // Pagination,
  // Popover,
  // Progress,
  // Radio,
  // RadioButton,
  // RadioGroup,
  // Rate,
  // Row,
  // Select,
  // Slider,
  // Spinner,
  // Step,
  // Steps,
  // Submenu,
  // Switch,
  // Table,
  // TableColumn,
  // TabPane,
  // Tabs,
  // Tag,
  // Timeline,
  // TimelineItem,
  // TimePicker,
  // TimeSelect,
  // Tooltip,
  // Transfer,
  // Tree,
  // Upload,
} from "element-ui";
import locale from "element-ui/lib/locale";
import enLang from "element-ui/lib/locale/lang/en";

const langs = {
  en: enLang,
};

const plugin = (_ctx, inject) => {
  // Vue.use(Alert)
  // Vue.use(Aside)
  // Vue.use(Autocomplete)
  // Vue.use(Backtop)
  // Vue.use(Badge)
  // Vue.use(Breadcrumb)
  // Vue.use(BreadcrumbItem)
  Vue.use(Button);
  // Vue.use(ButtonGroup)
  // Vue.use(Calendar)
  // Vue.use(Card)
  // Vue.use(Carousel)
  // Vue.use(CarouselItem)
  // Vue.use(Cascader)
  // Vue.use(CascaderPanel)
  // Vue.use(Checkbox)
  // Vue.use(CheckboxButton)
  // Vue.use(CheckboxGroup)
  // Vue.use(Col)
  // Vue.use(Collapse);
  // Vue.use(CollapseItem);
  // Vue.use(ColorPicker)
  // Vue.use(Container)
  // Vue.use(DatePicker);
  // Vue.use(Dialog)
  // Vue.use(Divider)
  // Vue.use(Dropdown)
  // Vue.use(DropdownItem)
  // Vue.use(DropdownMenu)
  // Vue.use(Footer)
  // Vue.use(Form);
  // Vue.use(FormItem);
  // Vue.use(Header)
  // Vue.use(InfiniteScroll);
  // Vue.use(Icon)
  // Vue.use(Image)
  // Vue.use(Input)
  // Vue.use(InputNumber)
  // Vue.use(Link)
  // Vue.use(Main)
  // Vue.use(Menu);
  // Vue.use(MenuItem);
  // Vue.use(MenuItemGroup)
  // Vue.use(Option);
  // Vue.use(OptionGroup)
  // Vue.use(PageHeader)
  // Vue.use(Pagination)
  // Vue.use(Popover)
  // Vue.use(Progress)
  // Vue.use(Radio)
  // Vue.use(RadioButton)
  // Vue.use(RadioGroup)
  // Vue.use(Rate)
  // Vue.use(Row)
  // Vue.use(Select);
  // Vue.use(Slider)
  // Vue.use(Spinner)
  // Vue.use(Step)
  // Vue.use(Steps)
  // Vue.use(Submenu)
  // Vue.use(Switch)
  // Vue.use(Table)
  // Vue.use(TableColumn)
  // Vue.use(TabPane)
  // Vue.use(Tabs)
  // Vue.use(Tag)
  // Vue.use(Timeline)
  // Vue.use(TimelineItem)
  // Vue.use(TimePicker)
  // Vue.use(TimeSelect)
  // Vue.use(Tooltip)
  // Vue.use(Transfer)
  // Vue.use(Tree)
  // Vue.use(Upload)

  Vue.use(Loading.directive);

  // Vue.prototype.$loading = Loading.service
  // Vue.prototype.$msgbox = MessageBox
  // Vue.prototype.$alert = MessageBox.alert
  // Vue.prototype.$confirm = MessageBox.confirm
  // Vue.prototype.$prompt = MessageBox.prompt
  // Vue.prototype.$notify = Notification

  inject("message", Message);

  locale.use(langs.en);
};

export default plugin;
