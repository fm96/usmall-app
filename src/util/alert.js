import { Toast} from 'antd-mobile';
// 成功的弹框
function Alert(msg) {
  Toast.info(msg, 1);
  setTimeout(() => {
    Toast.hide();
  }, 3000);
}

export default Alert
 