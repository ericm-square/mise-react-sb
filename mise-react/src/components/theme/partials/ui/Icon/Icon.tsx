import AccountIcon from '../../../icons/AccountIcon';
import AddIcon from '../../../icons/AddIcon';
import ArrowBackIcon from '../../../icons/ArrowBackIcon';
import ArrowBackIosIcon from '../../../icons/ArrowBackIosIcon';
import ArrowCircleUpIcon from '../../../icons/ArrowCircleUpIcon';
import ArrowClockIcon from '../../../icons/ArrowClockIcon';
import ArrowForwardIcon from '../../../icons/ArrowForwardIcon';
import BoltIcon from '../../../icons/BoltIcon';
import BoxArrowIcon from '../../../icons/BoxArrowIcon';
import CalendarTodayIcon from '../../../icons/CalendarTodayIcon';
import CallIcon from '../../../icons/CallIcon';
import CheckIcon from '../../../icons/CheckIcon';
import CheckCircleIcon from '../../../icons/CheckCircleIcon';
import CloseIcon from '../../../icons/CloseIcon';
import DirectionsIcon from '../../../icons/DirectionsIcon';
import DiscountIcon from '../../../icons/DiscountIcon';
import ErrorIcon from '../../../icons/ErrorIcon';
import ExpandLessIcon from '../../../icons/ExpandLessIcon';
import ExpandMoreIcon from '../../../icons/ExpandMoreIcon';
import ImageIcon from '../../../icons/ImageIcon';
import InfoIcon from '../../../icons/InfoIcon';
import LocationOnIcon from '../../../icons/LocationOnIcon';
import MapIcon from '../../../icons/MapIcon';
import MenuIcon from '../../../icons/MenuIcon';
import MyLocationIcon from '../../../icons/MyLocationIcon';
import NavigateBeforeIcon from '../../../icons/NavigateBeforeIcon';
import NavigateNextIcon from '../../../icons/NavigateNextIcon';
import NearMeIcon from '../../../icons/NearMeIcon';
import PhoneIcon from '../../../icons/PhoneIcon';
import PlayCircleIcon from '../../../icons/PlayCircleIcon';
import RemoveIcon from '../../../icons/RemoveIcon';
import ScheduleIcon from '../../../icons/ScheduleIcon';
import ScooterIcon from '../../../icons/ScooterIcon';
import SearchIcon from '../../../icons/SearchIcon';
import SellIcon from '../../../icons/SellIcon';
import ShoppingBagIcon from '../../../icons/ShoppingBagIcon';
import StarIcon from '../../../icons/StarIcon';
import StarRateEmptyIcon from '../../../icons/StarRateEmptyIcon';
import StarRateHalfIcon from '../../../icons/StarRateHalfIcon';
import StoreIcon from '../../../icons/StoreIcon';
import TrashIcon from '../../../icons/TrashIcon';
import VerifiedIcon from '../../../icons/VerifiedIcon';
import WarningIcon from '../../../icons/WarningIcon';
import WidgetsIcon from '../../../icons/WidgetsIcon';

export type IconNames =
  | 'account'
  | 'add'
  | 'arrow_back'
  | 'arrow_back_ios'
  | 'arrow_circle_up'
  | 'arrow_clock'
  | 'arrow_forward'
  | 'bolt'
  | 'box_arrow'
  | 'calendar_today'
  | 'call'
  | 'check'
  | 'check_circle'
  | 'close'
  | 'directions'
  | 'discount'
  | 'error'
  | 'expand_less'
  | 'expand_more'
  | 'image'
  | 'info'
  | 'location_on'
  | 'map'
  | 'menu'
  | 'my_location'
  | 'navigate_before'
  | 'navigate_next'
  | 'near_me'
  | 'phone'
  | 'play_circle'
  | 'remove'
  | 'schedule'
  | 'scooter'
  | 'search'
  | 'sell'
  | 'shopping_bag'
  | 'star'
  | 'star_rate_empty'
  | 'star_rate_half'
  | 'store'
  | 'trash'
  | 'verified'
  | 'warning'
  | 'widgets';

export interface IIconProps {
  name?: IconNames;
  width?: string;
  height?: string;
  color?: string;
  stroke?: string;
  iconClasses?: string;
}

export default function Icon(props: IIconProps) {
  const { name, iconClasses } = props;

  let IconComponent = null;
  switch (name) {
    case 'account':
      IconComponent = AccountIcon;
      break;
    case 'add':
      IconComponent = AddIcon;
      break;
    case 'arrow_back':
      IconComponent = ArrowBackIcon;
      break;
    case 'arrow_back_ios':
      IconComponent = ArrowBackIosIcon;
      break;
    case 'arrow_circle_up':
      IconComponent = ArrowCircleUpIcon;
      break;
    case 'arrow_clock':
      IconComponent = ArrowClockIcon;
      break;
    case 'arrow_forward':
      IconComponent = ArrowForwardIcon;
      break;
    case 'bolt':
      IconComponent = BoltIcon;
      break;
    case 'box_arrow':
      IconComponent = BoxArrowIcon;
      break;
    case 'calendar_today':
      IconComponent = CalendarTodayIcon;
      break;
    case 'call':
      IconComponent = CallIcon;
      break;
    case 'check':
      IconComponent = CheckIcon;
      break;
    case 'check_circle':
      IconComponent = CheckCircleIcon;
      break;
    case 'close':
      IconComponent = CloseIcon;
      break;
    case 'directions':
      IconComponent = DirectionsIcon;
      break;
    case 'discount':
      IconComponent = DiscountIcon;
      break;
    case 'error':
      IconComponent = ErrorIcon;
      break;
    case 'expand_less':
      IconComponent = ExpandLessIcon;
      break;
    case 'expand_more':
      IconComponent = ExpandMoreIcon;
      break;
    case 'image':
      IconComponent = ImageIcon;
      break;
    case 'info':
      IconComponent = InfoIcon;
      break;
    case 'location_on':
      IconComponent = LocationOnIcon;
      break;
    case 'map':
      IconComponent = MapIcon;
      break;
    case 'menu':
      IconComponent = MenuIcon;
      break;
    case 'my_location':
      IconComponent = MyLocationIcon;
      break;
    case 'navigate_before':
      IconComponent = NavigateBeforeIcon;
      break;
    case 'navigate_next':
      IconComponent = NavigateNextIcon;
      break;
    case 'near_me':
      IconComponent = NearMeIcon;
      break;
    case 'phone':
      IconComponent = PhoneIcon;
      break;
    case 'play_circle':
      IconComponent = PlayCircleIcon;
      break;
    case 'remove':
      IconComponent = RemoveIcon;
      break;
    case 'schedule':
      IconComponent = ScheduleIcon;
      break;
    case 'scooter':
      IconComponent = ScooterIcon;
      break;
    case 'search':
      IconComponent = SearchIcon;
      break;
    case 'sell':
      IconComponent = SellIcon;
      break;
    case 'shopping_bag':
      IconComponent = ShoppingBagIcon;
      break;
    case 'star':
      IconComponent = StarIcon;
      break;
    case 'star_rate_empty':
      IconComponent = StarRateEmptyIcon;
      break;
    case 'star_rate_half':
      IconComponent = StarRateHalfIcon;
      break;
    case 'store':
      IconComponent = StoreIcon;
      break;
    case 'trash':
      IconComponent = TrashIcon;
      break;
    case 'verified':
      IconComponent = VerifiedIcon;
      break;
    case 'warning':
      IconComponent = WarningIcon;
      break;
    case 'widgets':
      IconComponent = WidgetsIcon;
      break;
    default:
      IconComponent = AccountIcon;
      break;
  }

  return <IconComponent iconClasses={'material-icon-svg ' + iconClasses} />;
}
