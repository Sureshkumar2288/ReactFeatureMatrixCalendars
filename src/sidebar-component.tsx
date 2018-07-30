import * as React from 'react';
import { CheckBoxComponent, ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { SampleBase } from './sample-base';


class Auto extends SampleBase<{}, {}> {

    public type: string[] = ['Auto', 'Push', 'Slide', 'Over'];

    public position: string[] = ['Left', 'Right'];
    public Sidebar: SidebarComponent;
    constructor(prop: any) {
        super(prop);
        this.closeClick = this.closeClick.bind(this);
        this.enablePersistence = this.enablePersistence.bind(this);
        this.enableRTL = this.enableRTL.bind(this);
        this.onNumberFocusout = this.onNumberFocusout.bind(this);
        this.onStringFocusout = this.onStringFocusout.bind(this);
        this.onIndexFocusout = this.onIndexFocusout.bind(this);
        this.closeonDocumentClick = this.closeonDocumentClick.bind(this);
        this.Animate = this.Animate.bind(this);
        this.enableGesture = this.enableGesture.bind(this);
        this.Backdrop = this.Backdrop.bind(this);
        this.positionChange = this.positionChange.bind(this);
        this.typeChange = this.typeChange.bind(this);
    }

    public enablePersistence(args: any) {
        if (args.checked) { this.Sidebar.enablePersistence = true; } else { this.Sidebar.enablePersistence = false; }
    }
    public closeClick() {
        this.Sidebar.hide();
    }
    public typeChange(args: any) {
        this.Sidebar.type = args.value;
    }
    public showHide(args: any) {
        if (this.Sidebar.isOpen) { this.Sidebar.hide(); } else { this.Sidebar.show(); }
    }
    public Destroy() {
        this.Sidebar.destroy();
    }
    public toggle() {
        this.Sidebar.toggle();
    }
    public positionChange(args: any) {
        this.Sidebar.position = args.value;
    }
    public enableRTL(args: any) {
        if (args.checked) { this.Sidebar.enableRtl = true; } else { this.Sidebar.enableRtl = false; }
    }
    public closeonDocumentClick(args: any) {
        if (args.checked) { this.Sidebar.closeOnDocumentClick = true; } else { this.Sidebar.closeOnDocumentClick = false; }
    }
    public Animate(args: any) {
        if (args.checked) { this.Sidebar.animate = true; } else { this.Sidebar.animate = false; }
    }
    public enableGesture(args: any) {
        if (args.checked) { this.Sidebar.enableGestures = true; } else { this.Sidebar.enableGestures = false; }
    }
    public Backdrop(args: any) {
        if (args.checked) { this.Sidebar.showBackdrop = true; } else { this.Sidebar.showBackdrop = false; }
    }
    public onNumberFocusout(args: any) {
        if (args.target.value) {
            this.Sidebar.width = JSON.parse(args.target.value);
        }
    }
    public onStringFocusout(args: any) {
        if (args.target.value) {
            this.Sidebar.width = args.target.value;
        }
    }
    public onIndexFocusout(args: any) {
        if (args.target.value) {
            this.Sidebar.zIndex = JSON.parse(args.target.value);
        }
    }
    render() {
        return (
            <div id='combodefault' className='control-pane'>
                <SidebarComponent ref={Sidebar => this.Sidebar = Sidebar!} >
                    <div className='title'> Sidebar content</div>
                    <div className='sub-title'>
                        Click the button to close the Sidebar.
                    </div>
                    <div className='center-align'>
                        <ButtonComponent ejs-button onClick={this.closeClick.bind(this)}
                            className='e-btn close-btn'>Close Sidebar</ButtonComponent>
                    </div>
                </SidebarComponent>
                <div className='main-content container-fluid col-md-12' >
                    <div className='contents1'>
                        <div className='span3'>
                            Enable RTL
                    </div>
                        <div className='span3'>
                            <CheckBoxComponent change={this.enableRTL}></CheckBoxComponent>
                        </div>
                        <div className='span3'>
                            EnableStrict Persistence
    </div>
                        <div className='span3'>
                            <CheckBoxComponent change={this.enablePersistence}></CheckBoxComponent>
                        </div>
                        <div className='span3'>
                            Close on Doument click
    </div>
                        <div className='span3'>
                            <CheckBoxComponent change={this.closeonDocumentClick}></CheckBoxComponent>
                        </div>
                        <div className='span3'>
                            Animate
    </div>
                        <div className='span3'>
                            <CheckBoxComponent change={this.Animate}></CheckBoxComponent>
                        </div >
                        <div className='span3'>
                            enable Gestures
    </div>
                        <div className='span3'>
                            <CheckBoxComponent change={this.enableGesture}></CheckBoxComponent>
                        </div >
                        <div className='span3'>
                            Backdrop
    </div>
                        <div className='span3'>
                            <CheckBoxComponent change={this.Backdrop}></CheckBoxComponent>
                        </div >
                        <div className='span3'>
                            Width string Value
    </div>

                        <div className='span3'>
                            <div className='e-float-input' >
                                <input type='text' id={'width'} name={'width'} onBlur={this.onStringFocusout} />
                                <span className='e-float-line'></span>
                                <label className='e-float-text'>Width String Value</label>
                            </div>
                        </div>
                        <div className='span3'>
                            Width number Value
    </div>
                        <div className='span3'>
                            <div className='e-float-input'>
                                <input type='text' id={'widthstring'} name={'widthstring'} onBlur={this.onNumberFocusout} />
                                <span className='e-float-line'></span>
                                <label className='e-float-text'>Width number Value</label>
                            </div>
                        </div>
                        <div className='span3'>
                            Z-index Value
    </div>
                        <div className='span3'>
                            <div className='e-float-input'>
                                <input type='text' id={'Zindex'} name={'Zindex'} onBlur={this.onIndexFocusout} />
                                <span className='e-float-line'></span>
                                <label className='e-float-text'>Z-index Value</label>
                            </div>
                        </div>
                        <div className='span3'>
                            Position
    </div>
                        <div className='span3'>
                            <DropDownListComponent id={'float'} dataSource={this.position} change={this.positionChange}
                                value={'Never'} placeholder={'Position'} width={'200px'}></DropDownListComponent>
                        </div >
                        <div className='span3'>
                            Type
    </div>
                        <div className='span3'>
                            <DropDownListComponent id={'format'} dataSource={this.type} change={this.typeChange}
                                value={'null'} placeholder={'Tyoes'} width={'200px'}></DropDownListComponent>
                        </div >
                        <div className='methods'>
                            Methods
        <div>
                                <CheckBoxComponent label='Show/Hide' change={this.showHide} checked={true}></CheckBoxComponent>

                                <ButtonComponent id={'destroy'} className='e-control e-btn'
                                    onClick={this.Destroy.bind(this)}>Destroy</ButtonComponent>

                                <ButtonComponent id={'focusIn'} className='e-control e-btn'
                                    onClick={this.toggle.bind(this)} > Toggle</ButtonComponent >

                            </div >
                        </div >
                    </div >
                </div >

            </div >
        );
    }
}

export default Auto;
