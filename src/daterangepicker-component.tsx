import * as React from 'react';
import { CheckBoxComponent, ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { SampleBase } from './sample-base';


class Auto extends SampleBase<{}, {}> {

  public dateTimeInstance: DateRangePickerComponent;
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
    this.enableWeekNumber = this.enableWeekNumber.bind(this);
    this.floatChange = this.floatChange.bind(this);
    this.formatChange = this.formatChange.bind(this);
    this.startChange = this.startChange.bind(this);
    this.depthChange = this.depthChange.bind(this);
    this.onPlaceHolderFocusout = this.onPlaceHolderFocusout.bind(this);
    this.onFirstFocusout = this.onFirstFocusout.bind(this);
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
    if (args.checked) {
      this.dateTimeInstance.enablePersistence = true;
    } else {
      this.dateTimeInstance.enablePersistence = false;
    }
  }

  public enableRTL(args: any) {
    if (args.checked) {
      this.dateTimeInstance.enableRtl = true;
    } else {
      this.dateTimeInstance.enableRtl = false;
    }
  }

  public readOnly(args: any) {
    if (args.checked) {
      this.dateTimeInstance.readonly = true;
    } else {
      this.dateTimeInstance.readonly = false;
    }
  }

  public enable(args: any) {
    if (args.checked) {
      this.dateTimeInstance.enabled = true;
    } else {
      this.dateTimeInstance.enabled = false;
    }
  }

  public strictMode(args: any) {
    if (args.checked) {
      this.dateTimeInstance.strictMode = true;
    } else {
      this.dateTimeInstance.strictMode = false;
    }
  }
  public showClearButton(args: any) {
    if (args.checked) {
      this.dateTimeInstance.showClearButton = true;
    } else {
      this.dateTimeInstance.showClearButton = false;
    }
  }

  public enableWeekNumber(args: any) {
    if (args.checked) {
      this.dateTimeInstance.weekNumber = true;
    } else {
      this.dateTimeInstance.weekNumber = false;
    }
  }

  public floatChange(args: any) {
    this.dateTimeInstance.floatLabelType = args.value;
  }

  public formatChange(args: any) {
    this.dateTimeInstance.format = args.value;
  }

  public startChange(args: any) {
    this.dateTimeInstance.start = args.value;
  }

  public depthChange(args: any) {
    this.dateTimeInstance.depth = args.value;
  }

  public onPlaceHolderFocusout(args: any) {
    if (args.target.value) {
      this.dateTimeInstance.placeholder = args.target.value;
    } else {
      this.dateTimeInstance.placeholder = '';
    }
  }

  public onMaxFocusout(args: any) {
    this.dateTimeInstance.max = args.target.value;
  }

  public onMinFocusout(args: any) {
    this.dateTimeInstance.min = args.target.value;
  }

  public onValueFocusout(args: any) {
    this.dateTimeInstance.value = args.target.value;
  }

  public onFirstFocusout(args: any) {
    this.dateTimeInstance.firstDayOfWeek = JSON.parse(args.target.value);
  }

  public onNumberFocusout(args: any) {
    if (args.target.value) {
      this.dateTimeInstance.width = JSON.parse(args.target.value);
    } else {
      return;
    }
  }
  public onStringFocusout(args: any) {
    if (args.target.value) {
      this.dateTimeInstance.width = args.target.value;
    } else {
      return;
    }
  }
  public onIndexFocusout(args: any) {
    if (args.target.value) {
      this.dateTimeInstance.zIndex = JSON.parse(args.target.value);
    }
  }

  public oncssClassFocusout(args: any) {
    if (args.target.value) {
      this.dateTimeInstance.cssClass = args.target.value;
    } else {
      this.dateTimeInstance.cssClass = '';
    }
  }

  // methods

  public showHide(args: any) {
    if (args.checked) {
      this.dateTimeInstance.show();
    } else {
      this.dateTimeInstance.hide();
    }
  }

  public onDestroy(args: any) {
    this.dateTimeInstance.destroy();
  }

  public onfocusIn(args: any) {
    this.dateTimeInstance.focusIn();
  }

  public onBlur(args: any) {
    this.dateTimeInstance.focusOut();
  }

  public GetPesistData(args: any) {
    console.log(this.dateTimeInstance.getPersistData());
  }

  public GetView(args: any) {
    console.log(this.dateTimeInstance.currentView());
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
  public onNavigated(args: any) {
    console.log('select triggred');
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
            <label> DateTimePicker </label>
            <DateRangePickerComponent id='datetimepicker' ref={ele => this.dateTimeInstance = ele!} change={this.onChange.bind(this)}
              blur={this.onComponentBlur.bind(this)} open={this.onOpen.bind(this)} destroyed={this.onComponentDestroy.bind(this)}
              created={this.onCreated.bind(this)} select={this.onNavigated.bind(this)}
              focus={this.onFocus.bind(this)} close={this.onClose.bind(this)} />
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
            showWeekNumber
      </div>
          <div className='span3'>
            <CheckBoxComponent change={this.enableWeekNumber} />
          </div>
          <div className='span3'>
            Depth
      </div>
          <div className='span3'>
            <DropDownListComponent dataSource={this.depth} change={this.depthChange} />

          </div>
          <div className='span3'>
            Start
      </div>
          <div className='span3'>
            <DropDownListComponent dataSource={this.start} change={this.startChange} />

          </div>
          <div className='span3'>
            FirstDay
      </div>
          <div className='span3'>
            <div className='e-float-input'>
              <input type='text' id={'firstDay'} onBlur={this.onFirstFocusout} />
              <span className='e-float-line'></span>
              <label className='e-float-text'>Fist day Value</label>
            </div>
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
              <div className='span3'>
                GetCurrentView
              </div>
              <div className='span3'>
                <ButtonComponent id={'getView'} onClick={this.GetView.bind(this)} >GetView</ButtonComponent>
              </div>
            </div>
          </div>

        </div >

      </div>
    );
  }
}

export default Auto;
