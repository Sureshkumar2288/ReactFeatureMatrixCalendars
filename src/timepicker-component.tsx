/**
 * AutoComplete Default functionality Sample
 */
// import * as ReactDOM from 'react-dom';
import * as React from 'react';
// import { BrowserRouter, Route, Link } from "react-router-dom";
import { CheckBoxComponent, ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { SampleBase } from './sample-base';
// import { PropertyPane } from './property-pane';

class Time extends SampleBase<{}, {}> {

  public dateInstance: TimePickerComponent;
  public float: string[] = ['Auto', 'Never', 'Always'];
  public format: string[] = ['dd/MM/yyyy', 'MM/dd/yy', 'MMMM-dd-yyyy'];
  public start: string[] = ['Month', 'Year', 'Decade'];
  public depth: string[] = ['Month', 'Year', 'Decade'];
  public widthDimention = {
    width: '200px'
  }
  constructor(prop: any) {
    super(prop);
    this.enablePersistence = this.enablePersistence.bind(this);
    this.enableRTL = this.enableRTL.bind(this);
    this.enable = this.enable.bind(this);
    this.readOnly = this.readOnly.bind(this);
    this.strictMode = this.strictMode.bind(this);
    this.showClearButton = this.showClearButton.bind(this);
    this.floatChange = this.floatChange.bind(this);
    this.formatChange = this.formatChange.bind(this);
    this.onPlaceHolderFocusout = this.onPlaceHolderFocusout.bind(this);
    this.onValueFocusout = this.onValueFocusout.bind(this);
    this.onMinFocusout = this.onMinFocusout.bind(this);
    this.onMaxFocusout = this.onMaxFocusout.bind(this);
    this.onNumberFocusout = this.onNumberFocusout.bind(this);
    this.onStringFocusout = this.onStringFocusout.bind(this);
    this.onIndexFocusout = this.onIndexFocusout.bind(this);
    this.oncssClassFocusout = this.oncssClassFocusout.bind(this);
    this.showHide = this.showHide.bind(this);
  }

  public enablePersistence(args: any) {
    // debugger;
    if (args.checked) {
      this.dateInstance.enablePersistence = true;
    } else {
      this.dateInstance.enablePersistence = false;
    }
  }

  public enableRTL(args: any) {
    if (args.checked) {
      this.dateInstance.enableRtl = true;
    } else {
      this.dateInstance.enableRtl = false;
    }
  }

  public readOnly(args: any) {
    if (args.checked) {
      this.dateInstance.readonly = true;
    } else {
      this.dateInstance.readonly = false;
    }
  }

  public enable(args: any) {
    if (args.checked) {
      this.dateInstance.enabled = true;
    } else {
      this.dateInstance.enabled = false;
    }
  }

  public strictMode(args: any) {
    if (args.checked) {
      this.dateInstance.strictMode = true;
    } else {
      this.dateInstance.strictMode = false;
    }
  }
  public showClearButton(args: any) {
    if (args.checked) {
      this.dateInstance.showClearButton = true;
    } else {
      this.dateInstance.showClearButton = false;
    }
  }


  public floatChange(args: any) {
    this.dateInstance.floatLabelType = args.value;
  }

  public formatChange(args: any) {
    this.dateInstance.format = args.value;
  }

  public onPlaceHolderFocusout(args: any) {
    if (args.target.value) {
      this.dateInstance.placeholder = args.target.value;
    } else {
      this.dateInstance.placeholder = '';
    }
  }

  public onMaxFocusout(args: any) {
    this.dateInstance.max = args.target.value;
  }

  public onMinFocusout(args: any) {
    this.dateInstance.min = args.target.value;
  }

  public onValueFocusout(args: any) {
    this.dateInstance.value = args.target.value;
  }

  public onNumberFocusout(args: any) {
    if (args.target.value) {
      this.dateInstance.width = JSON.parse(args.target.value);
    } else {
      return;
    }
  }
  public onStringFocusout(args: any) {
    if (args.target.value) {
      this.dateInstance.width = args.target.value;
    } else {
      return;
    }
  }
  public onIndexFocusout(args: any) {
    if (args.target.value) {
      this.dateInstance.zIndex = JSON.parse(args.target.value);
    }
  }

  public oncssClassFocusout(args: any) {
    if (args.target.value) {
      this.dateInstance.cssClass = args.target.value;
    } else {
      this.dateInstance.cssClass = '';
    }
  }

  // methods

  public showHide(args: any) {
    if (args.checked) {
      this.dateInstance.show();
    } else {
      this.dateInstance.hide();
    }
  }

  public onDestroy(args: any) {
    this.dateInstance.destroy();
  }

  public onfocusIn(args: any) {
    this.dateInstance.focusIn();
  }

  public onBlur(args: any) {
    this.dateInstance.focusOut();
  }

  public GetPesistData(args: any) {
    console.log(this.dateInstance.getPersistData());
  }

  public onClose(args: any) {
    console.log('Close triggred');
    console.log(args);
  }
  public onCreated(args: any) {
    console.log('created triggred');
    console.log(args);
  }
  public onComponentDestroy(args: any) {
    console.log('destroy triggred');
    console.log(args);
  }
  public onChange(args: any) {
    console.log('Change triggred');
    console.log(args);
  }
  public onOpen(args: any) {
    console.log('Open triggred');
    console.log(args);
  }
  public onComponentBlur(args: any) {
    console.log('Blur triggred');
    console.log(args);
  }
  public onFocus(args: any) {
    console.log('Focus triggred');
    console.log(args);
  }

  render() {


    return (
      <div id='combodefault' className='control-pane'>
        <div className='content-wrapper'>
          <div className='contents'>
            <label> TimePicker feature matrix sample </label>
            <TimePickerComponent id='datepicker' ref={ele => this.dateInstance = ele!} change={this.onChange.bind(this)}
              blur={this.onComponentBlur.bind(this)} open={this.onOpen.bind(this)} destroyed={this.onComponentDestroy.bind(this)}
              created={this.onCreated.bind(this)} focus={this.onFocus.bind(this)} close={this.onClose.bind(this)} />
          </div>
        </div>
        <div className='contents1'>
          <div className='span3'>
            EnableStrict Persistence
          </div>
          <div className='span3'>
            <CheckBoxComponent change={this.enablePersistence} />
          </div>
          <div className='span3'>
            EnableRTL
      </div>
          <div className='span3'>
            <CheckBoxComponent change={this.enableRTL} />
          </div>
          <div className='span3'>
            Enabled
      </div>
          <div className='span3'>
            <CheckBoxComponent change={this.enable} checked={true} />
          </div>
          <div className='span3'>
            ReadOnly
      </div>
          <div className='span3'>
            <CheckBoxComponent change={this.readOnly} />
          </div>
          <div className='span3'>
            showClearButton
      </div>
          <div className='span3'>
            <CheckBoxComponent change={this.showClearButton} checked={true} />
          </div>
          <div className='span3'>
            StrictMode
      </div>
          <div className='span3'>
            <CheckBoxComponent change={this.strictMode} />
          </div>
          <div className='span3'>
            Placeholder Value
    </div>
          <div className='span3'>
            <div className='e-float-input'>
              <input type='text' id={'placeholder'} name={'placeholder'} onBlur={this.onPlaceHolderFocusout} />
              <span className='e-float-line'></span>
              <label className='e-float-text'>PlaceHolder</label>
            </div>
          </div>
          <div className='span3'>
            floatLabelType
    </div>
          <div className='span3'>
            <DropDownListComponent dataSource={this.float} change={this.floatChange}
              value={'Never'} placeholder={'flotLabelType'} width={'200px'} />
          </div>
          <div className='span3'>
            Formats
    </div>
          <div className='span3'>
            <DropDownListComponent dataSource={this.format} change={this.formatChange} value={'null'}
              placeholder={'Formats'} width={'200px'} />
          </div>
          <div className='span3'>
            Value
      </div>
          <div className='span3'>
            <div className='e-float-input'>
              <input type='text' id={'value'} onBlur={this.onValueFocusout} style={this.widthDimention} />
              <span className='e-float-line'></span>
              <label className='e-float-text'>Value</label>
            </div>
          </div>
          <div className='span3'>
            Min Value
      </div>
          <div className='span3'>
            <div className='e-float-input'>
              <input type='text' id={'min'} onBlur={this.onMinFocusout} />
              <span className='e-float-line'></span>
              <label className='e-float-text'>Min Value</label>
            </div>
          </div>
          <div className='span3'>
            Max Value
      </div>
          <div className='span3'>
            <div className='e-float-input'>
              <input type='text' id={'max'} onBlur={this.onMaxFocusout} />
              <span className='e-float-line'></span>
              <label className='e-float-text'>max Value</label>
            </div>
          </div>

          <div className='span3'>
            Width string Value
      </div>
          <div className='span3'>
            <div className='e-float-input'>
              <input type='text' id={'widthS'} onBlur={this.onStringFocusout} />
              <span className='e-float-line'></span>
              <label className='e-float-text'>Width String Value</label>
            </div>
          </div>
          <div className='span3'>
            Width number Value
      </div>
          <div className='span3'>
            <div className='e-float-input'>
              <input type='text' id={'widthN'} onBlur={this.onNumberFocusout} />
              <span className='e-float-line'></span>
              <label className='e-float-text'>Width number Value</label>
            </div>
          </div>
          <div className='span3'>
            Z-index Value
      </div>
          <div className='span3'>
            <div className='e-float-input'>
              <input type='text' id={'zindex'} onBlur={this.onIndexFocusout} />
              <span className='e-float-line'></span>
              <label className='e-float-text'>Z-index Value</label>
            </div>
          </div>
          <div className='span3'>
            cssclassName Value
      </div>
          <div className='span3'>
            <div className='e-float-input'>
              <input type='text' id={'cssClass'} onBlur={this.oncssClassFocusout} />
              <span className='e-float-line'></span>
              <label className='e-float-text'>cssclassName Value</label>
            </div>
          </div>
          <div>
            Methods:
            <div>
              <div className='span3'>
                Show/Hide
              </div>
              <div className='span3'>
                <CheckBoxComponent change={this.showHide} />
              </div>
              <div className='span3'>
                Destroy
              </div>
              <div className='span3'>
                <ButtonComponent id={'destroy'} onClick={this.onDestroy.bind(this)} >Destroy</ButtonComponent>
              </div>
              <div className='span3'>
                FocusIn
              </div>
              <div className='span3'>
                <ButtonComponent id={'focusIN'} onClick={this.onfocusIn.bind(this)} >focusIn</ButtonComponent>
              </div>
              <div className='span3'>
                FocusOut
              </div>
              <div className='span3'>
                <ButtonComponent id={'focusOUT'} onClick={this.onBlur.bind(this)} >FocusOut</ButtonComponent>
              </div>
              <div className='span3'>
                GetPesistData
              </div>
              <div className='span3'>
                <ButtonComponent id={'persist'} onClick={this.GetPesistData.bind(this)} >GetPesistData</ButtonComponent>
              </div>
            </div>
          </div>

        </div >
      </div>
    );
  }
}
export default Time;
