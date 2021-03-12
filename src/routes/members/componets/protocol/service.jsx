import React from 'react'
import Page from '@src/components/page/index'
import styles from '../../members'
import images from '../images'
import { fun, ua } from '@src/common/app'
const { getParams } = fun

class Service extends React.Component {
  state = {
    statusBarHeight:''
  }
  componentDidMount() {
    this.getStatusBarHeight()
  }
  getStatusBarHeight(){
    let height = window.localStorage.getItem('statusBarHeight')
    
    let statusBarHeight= height? height+'px': '44px'
    this.setState({
      statusBarHeight
    })
  }
  goBack(){
    const { userCenter } = getParams()
    userCenter==1? window.history.go(-1) : andall.invoke('back')
  }
  render() {
    const { statusBarHeight} = this.state
    return (
      <Page title='安我会员服务协议'>
        <div className={`${styles.titleBar} ${styles.white}`} style={{paddingTop: `${statusBarHeight}`}}>
          <div className={styles.titleBarCon}>
            <div className={styles.backIcon} onClick={()=>this.goBack()}>
              <img src={images.iconBackBlack} />
            </div>
            <h1>安我会员服务协议</h1>
          </div>  
        </div>
        <div style={{paddingTop: `calc(44px + ${statusBarHeight}`}}>
        
        <div className={styles.protocolBox}>
          <p>生效日期:2020年6月10日</p>
          <p>提示条款</p>
          <p>各服务条款前所列索引关键词仅为帮助您理解该条款表达的主旨之用，不影响或限制本协议条款的含义或解释。为维护您自身权益，建议您仔细阅读各条款具体表述。</p>
          <p>【审慎阅读】您在开通安我会员流程中点击同意本协议之前，应当认真阅读本协议。请您务必审慎阅读、充分理解各条款内容，特别是免除或者限制责任的条款、法律适用和争议解决条款。免除或者限制责任的条款将以粗线下划线标识，您应重点阅读。如您对协议有任何疑问，可按照本协议中的联系方式向我们咨询，我们会为您做进一步解释和说明。</p>
          <p>【签约动作】当您按照安我会员开通页面提示阅读并同意本协议且完成全部开通程序后，即表示您已充分阅读、理解并接受本协议的全部内容，并与安我达成一致，成为安我会员。阅读本协议的过程中，如果您不同意本协议或其中任何条款约定，您应立即停止开通程序。</p>
          <h2>一、定义</h2>
          <p>1.1 安我会员:是指安我为了更好的服务用户所推出的一项增值服务，包含众多会员专属权益。安我会员服务由上海解兮生物科技有限公司(下称“安我")向用户提供。</p>
          <p>1.2 安我会员权益:指用户基于安我会员资格所享受的特殊权益，包含多项会员专属权益。</p>
          <p>1.3 安我会员服务:指为保障用户获取或使用安我会员权益，安我向用户提供的各项服务。</p>
          <h2>二、安我会员服务开通</h2>
          <p>2.1 您应确保在安我会员服务开通及使用过程中，始终具备完全民事权利能力和完全民事行为能力，并确保您具有签订和履行本协议项下权利义务之实际能力。如您在18周岁以下，您只能在父母或监护人的监护参与下方能参与该服务。</p>
          <p>2.2 提交申请开通时，用户同意并提交本人手机号码等本站所需的个人资料，并保证其提供的注册资料真实、准确、完整、合法有效，用户注册资料如有变动的，应及时更新其注册资料。如果用户提供的注册资料不合法、不真实、不准确、不详尽，用户需承担因此引起的相应责任及后果，并且安我保留终止用户参与该活动的权利。</p>
          <p>2.3 您申请开通安我会员服务时，需根据页面提示支付相应的会员服务费用后方可完成开通。为保障您的权益，建议您在购买时仔细阅读并确认购买页面展示信息，包括但不限于会员权益、价格、服务条款等。基于权益调整、市场与业务的发展，安我可能会调整会员服务开通所需会员服务费用，或调整全部或部分会员权益。会员费用或会员权益调整将在相应服务页面进行通知或公告，您可以通过安我生活APP查询最新的会员权益内容。会员服务费用调整自公布之日起生效，您于生效日前已开通的安我会员服务不受影晌，但该安我会员服务到期后若需续费开通或自动续费，则需按照调整后已生效的费用标准支付。增值服务开始收费前安我将以适当的方式通知您具体标准，您有权选择拒绝收费的增值项目。</p>
          <h2>三、安我会员服务使用</h2>
          <p>3.1 安我会员服务提供的会员专享优惠券、安我积分等会员专属权益服务均含有效期限，请您在购买会员时务必认真阅读会员权益说明或相关页面提示，您一旦购买会员即视为认可会员服务及各项专属权益的有效期限。</p>
          <p>3.2 安我会员服务的有效期限以用户自行选择并支付相应会员费用的页面展示期限为准。安我会员服务的有效期到期后，安我将停止向您提供会员服务，会员专属权益有效期截止后，该权益立即失效。</p>
          <p>3.3 安我会员服务的收费标准由安我根据自身运营策略决定，并在会员服务购买页面向您展示。您同意您继续操作的行为(包括但不限于点击同意购买、支付行为、继续使用会员服务的行为等)，即视为您知悉并同意该收费标准。</p>
          <p>3.4 为满足您对安我会员自动续费扣款的需求，安我推出自动续费服务，服务详情请查阅《安我会员自动续费协议》。如您选择自动续费选项，即视为您知悉并同意开通自动续费服务。</p>
          <p>3.5 您成为安我会员后，可享受的会员权益以安我公布的会员权益说明内容为准。为了改善用户体验、完善服务内容、保证安我会员与安我服务的商业诉求一致，安我会对安我会员及或其相关服务、权益、功能、界面等进行更新、修改，包括开发新功能权益、删除旧功能权益等。您可按照变更后安我会员的实际情况继续使用相应权益、功能或服务并适用本协议的相关约定。安我就前述会员权益调整将在相应会员服务页面进行通知或公告，您可以通过安我查询最新的会员说明中有关会员权益内容。安我鼓励您定期查看本协议及会员权益说明内容，以更好地保障您的权益。</p>
          <p>3.6 安我会员服务及会员权益仅限您本人使用，开通安我会员服务或获取安我会员权益的账户作为您享受相应服务及权益的重要身份标识，用户名、密码均由您自行设置并保管。安我账号与您的会员权益及资格密切相关。交由他人使用可能会造成您本人在权益使用上的不良影响，因此安我请您不要将自己的账号给予他人使用。从公平合理的角度，您应知晓所有通过该账号实现的操作，安我只能默认视为您本人的行为，由此产生的后果由您与实际使用者自行承担。</p>
          <p>3.7 【不当使用会员服务】您确保您将合理使用安我会员服务，不利用安我会员服务进行营利或非法获利，不以任何形式转让或转移您所享有的安我会员服务或安我会员权益，不以任何方式将安我会员服务或安我会员权益借给他人使用。若安我有合理理由怀疑您存在任何不当使用会员服务行为的，安我将取消您的安我会员资格、作废安我会员权益且您不应要求安我退还您已支付的会员服务费用。您应对您不当使用会员服务的行为及后果(包括损失)负责，您若给安我造成损失的，安我有权向您追偿。</p>
          <p>3.8 【违背诚实信用】您保证您在获取和使用安我会员服务过程中应遵守诚实信用原则，若安我合理怀疑您存在以下任一情形的，您将可能面临安我会员服务开通申请被拒绝、已开通的安我会员服务被终止或中止、已绑定或获取的安我会员权益被全部/部分取消或暂停使用，且您不应要求退还已支付的会员服务费用(如有)：</p>
1）利用安我会员服务进行盈利或非法获利；<br />
2）以任何形式转让或转移安我会员服务或安我会员权益；<br />
3）将安我会员服务或会员权益借给他人使用、代他人下单；<br />
4）通过任何不正当手段或以违反城市信用原则的方式开通安我会员服务，如恶意绕过正常开通流程；<br />
5）使用安我会员权益获取的商品或服务并非用于个人消费或使用；<br />
6）同一用户注册、持有、使用或控制多个会员账号。其中，同一用户是指安我账户、手机号码、支付账号、身份证号码、设备号、注册信息、网络操作日志、交易订单信息等与用户身份和行为相关的信息，其中任意一项或数项存在相同、相似，亦或通过特定标记批量信息进行分析，其数项存在相同、相似的；<br />
7）用户在使用会员服务时，存在利用秒杀器等工具下单、套取优惠利差、虚假下单交易、提供虚假交易信息等扰乱交易秩序、违反交易规则的行为；<br />
8）经安我判断，会员行为不符合公平原则或诚实信用原则的情形。<br />
          <p>3.9 您知悉并同意，为保证您充分享受安我会员服务避免您错过优质会员权益，安我可能通过消息、通知、短信等形式，向您提供会员权益相关信息。</p>
          <h2>四、安我会员服务终止</h2>
          <p>4.1 您应理解安我会员服务具备一定有效期，有效期届满后您未续费或重新开通的，安我会员服务终止，对应的安我会员权益失效。</p>
          <p>4.2 您应理解按本协议及相关规则使用安我会员服务尊重安我会员服务使用限制及按本协议约定履行义务是您使用安我会员服务的前提，如您违反本协议的相关约定，安我会视您的实际违约情况选择中止、终止或解除本协议。</p>
          <p>4.3 您知悉并确认，您所支付的会员服务费用代表您开通、使用安我会员服务。安我所付出的整体成本和努力，无法按照安我会员权益或有效期进行拆分。您开通安我会员服务卮，若出现以下情形造成安我会员服务终止或中止的，您不应要求退还已支付部分或全部会员服务费用：</p>
1)您中途主动取消安我会员服务、放弃会员权益或终止资格的;<br />
2)安我根据《用户购买协议》、《安我会员服务协议》等安我平台规则注销您的账号、终止您的安我用户资格的;<br />
          <p>4.4 若安我无合理理由即自行决定终止向您提供安我会员服务，作为对您作为安我会员的回馈，安我将根据届时终止会员服务通知中的约定向您做出相应补偿。然而，因安我认定您为违反本协议或任何相关法律的行为、欺诈或滥用安我会员的行为、或损害安我利益或伤害其他用户的行为而导致的终止，安我不予退款</p>
          <p>4.5 本协议的终止并不影响终止前您与安我基于本协议产生的权利义务。因您的原因导致安我遭受第三方索赔、行政部门处罚等，您应对赔偿安我因此产生的损失及/或发生的费用，包括合理的律师费用、调查取证费用等。如因您的个人行为造成安我商誉损害的，安我有权要求您在公开媒体上发表声明以消除影响。</p>
          <h2>五、无担保和责任限制</h2>
          <p>5.1 您理解安我将尽最大努力确保本服务及其所涉及的技术及信息安全、有效、准确、可靠，但受限于现有技术水平等因素，对于下述原因导致的合同履行障碍、瑕疵、延后或内容变更等情形，导致您直接或间接损失，您理解安我不承担责任</p>
5.1.1 因自然灾害、罢工、暴乱、战争、恐怖袭击、政府行为、司法行政命令等不可抗力因素;<br />
5.1.2 因电信部门技术调整或故障、通讯网络故障等公共服务因素;<br />
5.1.3 用户自身设备的软件、系统、硬件和通信线路出现故障，或用户通过非本协议项下约定的方式使用本服务的;<br />
5.1.4 安我已妥善管理，但岀现紧急设备/系统的故障维护、网络信息与数据安全等情况。<br />
          <p>5.2 基于收益与赔偿相一致及公平合理的原则，如因安我原因造成安我会员服务不正常中断或服务不可用，您所可能获得的最高赔偿额不超过本协议项下安我已实际收取的相关服务费用总额。</p>
          <h2>六、其他</h2>
          <p>6.1 由于互联网高速发展，您与安我签署的本协议列明的条款并不能完整罗列和涵盖您与安我之间的所有权利与义务现有的约定。为更好的保护您的权益及提供更优质的服务，安我可根据国家法律法规变化及维护服务秩序等需要，及时  修改本协议，变更后的协议(下称“变更事项”)一旦被公告在本站上即生效，并替代原来的协议。若不同意相关规则和条款修改的，应及时终止本协议，并停用本站的部分功能。如用户继续使用本网站或APP提供的服务的，即视为同意更新后的协议。安我建议您在使用本站之前阅读本协议及本站的广告。</p>
          <p>6.2 安我将可能向特定用户提供不同的会员试用或其他临时性的会员服务，除非在具体服务中另行说明，否则该等试用或临时性会员服务均受限于本服务协议。</p>
          <p>6.3 本协议使用中华人民共和国法律，如您与安我就该内容或执行发生任何争议，双方应尽力友好协商解决；协商不成的，任何一方均可向上海市浦东新区人民法院提起诉讼。</p>
          <p>6.4 如您未能严格遵守本协议，并不构成安我对本协议约定的任何权利的放弃。</p>
          <p>6.5 本协议内容中以黑体、加粗、下划线、斜体等方式显著标识的条款，请您着重阅读。</p>
          <p>6.6 您若有任何服务相关疑问，可致电安我客服:021-80344674</p>
        </div>
        </div>
      </Page>
    )
  }
}

export default Service
