import Button from "@/components/Button"
import Alert from "@/components/Alert"
import Paragraph from "@/components/Paragraph"
import Matrix from "@/components/Matrix"
import { LuxButton, LuxBlockquote } from "@lux-design-system/components-react/dist/index.mjs"
import LuxAlert from "@/components/LuxAlert"
// import utrechtStyle from "@utrecht/component-library-css/dist/index.css";
import "@utrecht/component-library-css";

export default function Page() {
  return (
    <>
      <h1>Flash of Unstyled Content</h1>
      <Matrix cols={4}>
        <div><h2>Button</h2></div>
        <button type="button" className='utrecht-button utrecht-button--primary-action'>HTML - LUX Tokens</button>
        <Button appearance="primary-action-button">LUX Webcomponent</Button>
        <LuxButton variant="primary" size={undefined}>LUX React component</LuxButton>
        <div><h2>Alert</h2></div>
        <div className="utrecht-alert utrecht-alert--info">
          <div className="utrecht-alert__icon">[ℹ️]</div>
          <div className="utrecht-alert__content">
            <div className="utrecht-alert__message" role="alert">
              <p className="utrecht-paragraph">HTML - LUX Tokens</p>
            </div>
          </div>
        </div>
        <Alert type="info"><Paragraph>LUX Webcomponent</Paragraph></Alert>
        <LuxAlert type="info">LUX React component *</LuxAlert>
        {/* <div><h2>Blockquote</h2></div>
        <div className="utrecht-blockquote">LUX tokens</div>
        <div>tbd</div>
        <LuxBlockquote>LUX React component</LuxBlockquote> */}
      </Matrix>
      <p style={{textAlign: "right", paddingBlockStart: "2rem"}}>* Wrapped in <code>use client</code> because code uses <code>useState</code>.</p>
    </>
  )
}
