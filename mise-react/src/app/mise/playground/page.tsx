import Pill, { IPillProps } from "@/components/theme/partials/ui/Pill/Pill";
import { useState } from "react";
import styles from './PlaygroundPage.module.css';
import Breadcrumb, { IBreadcrumbProps } from "@/components/theme/partials/ui/Breadcrumb/Breadcrumb";
import Marquee from "@/components/theme/partials/ui/Marquee/Marquee";
import Loader, { ILoaderProps } from "@/components/theme/partials/ui/Loader/Loader";
import IconInput from "@/components/theme/partials/macros/IconInput/IconInput";
import Accordion, { IAccordionItem } from "@/components/theme/partials/ui/Accordion/Accordion";
import CheckboxSingle from "@/components/theme/partials/form/CheckboxSingle/CheckboxSingle";
import Button, { IButtonProps } from "@/components/theme/partials/ui/Button/Button";
import Notice from "@/components/theme/partials/ui/Notice/Notice";
import Menu, { IMenuProps } from "@/components/theme/partials/ui/Menu/Menu";
import Card from "@/components/theme/partials/ui/Card/Card";
import GoogleMap from "@/components/theme/partials/ui/GoogleMap/GoogleMap";

export default function PlaygroundPage() {

    // Accordion...
    const [accordionSize, setAccordionSize] = useState('small');
    const [accordionDivider, setAccordionDivider] = useState(true);
    const accordionItems1: IAccordionItem[] = [
        { label: 'Item 1', content: '<p>Accordion item 1 content</p>' },
        { label: 'Item 2 (bullet list content)', content: '<ul><li>List 1</li><li>List 2</li></ul>' },
        { label: 'Item 3 (disabled)', content: '<p>Accordion item 3 content</p>', disabled: true },
    ];
    const accordionItems2: IAccordionItem[] = [
        { label: 'Item 1', icon: 'map', content: '<p>Accordion item 1 content</p>' },
        { label: 'Item 2', icon: 'phone', content: '<p>Accordion item 2 content</p>' },
    ];
    

    // Pill...
    const pillTypes: IPillProps['type'][] = ['info', 'warning', 'success', 'critical', 'emphasis'];
    const [pillVariant, setPillVariant] = useState<IPillProps['variant']>('fill');
    const [pillSize, setPillSize] = useState<IPillProps['size']>('normal');
    const [pillShape, setPillShape] = useState<IPillProps['shape']>('pill');
    const [pillUppercase, setPillUppercase] = useState(true);
    const [pillInteractive, setPillInteractive] = useState(false);

    // Breadcrumb...
    const [breadcrumbSize, setBreadcrumbSize] = useState<IBreadcrumbProps['size']>('small');
    const [breadcrumbUppercase, setBreadcrumbUppercase] = useState(true);
    const breadcrumb = [
        { title: 'Category', link: '#' },
        { title: 'Sub category', link: '#' },
        { title: 'Item name' },
    ];

    // Buttons...
    const [buttonSize, setButtonSize] = useState<IButtonProps['size']>('medium');
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [buttonDestructive, setButtonDestructive] = useState(false);
    const [buttonOpaque, setButtonOpaque] = useState(false);

    // Google Map...
    const pincolor = '006aff';  // TODO: Should be brand color
    const pincontrastcolor = pincolor || 'ffffff';  // TODO: Should be brand color contrast
    const singlePinMapConfig = {
        height: '230px',
        lat: '37.09024',
        long: '-95.71289',
        pincolor,
        pincontrastcolor,
    };
    const multiplePinsMapConfig = {
        height: '230px',
        lat: 0,
        long: 0,
        activeMarker: null,
        control: 3,
        scalecontrol: 1,
        markers: [{
            id: 'location_1',
            display_name: 'Square SF',
            address: '1455 Market Street Unit 600, San Francisco, CA 94103',
            phone: '855-700-6000',
            lat: '37.09024',
            long: '-95.71289',
        }, {
            id: 'location_2',
            display_name: 'Square NY',
            address: '375 W Broadway, New York, NJ 10012',
            phone: '646-217-0502',
            lat: '40.7234785',
            long: '-74.0208671',
        }],
        pincolor,
        pincontrastcolor,
    };

    // Loader...
    const [loaderSize, setLoaderSize] = useState<ILoaderProps['size']>('small');

    // Menu...
    const [menuSize, setMenuSize] = useState<IMenuProps['size']>('medium');


    
    return (
        <div className="container" style={{ padding: 40 }}>
            <h2 className="heading-3 heading-with-margin">UI components</h2>

            {/* Color */}
            <h3 id="color" className="heading-with-margin">Color variables</h3>
            <div className={`${styles.row} ${styles['row--divider']} ${styles['example__row']}`}>
                <div className={styles.col} data-col-12>
                    <div className={styles.row}>
                        <div className={styles.col} data-col-3>
                            <h5 className="heading-with-margin">TEXT colors are used for all non-interactive text</h5>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-text-10)' }}></span>
                                <span>Text 10</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-text-20)' }}></span>
                                <span>Text 20</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-text-30)' }}></span>
                                <span>Text 30</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-text-inverse)' }}></span>
                                <span>Text Inverse</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-text-black)' }}></span>
                                <span>Text Black</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-text-white)' }}></span>
                                <span>Text White</span>
                            </div>
                        </div>
                        <div className={styles.col} data-col-3>
                            <h5 className="heading-with-margin">FILL colors are used for shapes, buttons and icons</h5>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-fill-10)' }}></span>
                                <span>Fill 10</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-fill-20)' }}></span>
                                <span>Fill 20</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-fill-30)' }}></span>
                                <span>Fill 30</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-fill-40)' }}></span>
                                <span>Fill 40</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-fill-50)' }}></span>
                                <span>Fill 50</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-fill-inverse)' }}></span>
                                <span>Fill inverse</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-fill-black)' }}></span>
                                <span>Fill black</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-fill-white)' }}></span>
                                <span>Fill white</span>
                            </div>
                        </div>
                        <div className={styles.col} data-col-3>
                            <h5 className="heading-with-margin">DIVIDER colors are used for dividers, borders and outlines</h5>
                            <div className={styles["example__color-shade-col"]}>
                                <span className="example__border-shade" style={{ borderColor: 'var(--theme-divider-10)' }}></span>
                                <span>Divider 10</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className="example__border-shade" style={{ borderColor: 'var(--theme-divider-10-inverse)' }}></span>
                                <span>Divider 10 inverse</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className="example__border-shade" style={{ borderColor: 'var(--theme-divider-20)' }}></span>
                                <span>Divider 20</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className="example__border-shade" style={{ borderColor: 'var(--theme-divider-20-inverse)' }}></span>
                                <span>Divider 20 inverse</span>
                            </div>
                        </div>
                        <div className={styles.col} data-col-3>
                            <h5 className="heading-with-margin">SURFACE colors are used to represent elevation for solid elements like pages, containers and modals</h5>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-surface-05)' }}></span>
                                <span>Surface 5</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-surface-10)' }}></span>
                                <span>Surface 10</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-surface-20)' }}></span>
                                <span>Surface 20</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-surface-30)' }}></span>
                                <span>Surface 30</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-surface-inverse)' }}></span>
                                <span>Surface Inverse</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-surface-overlay)' }}></span>
                                <span>Surface Overlay</span>
                            </div>
                            <div style={{ marginTop: '24px', fontSize: '12px' }}>
                                <p>Surface 5 = Page, Full Modal</p>
                                <p>Surface 10 = Card, Banner</p>
                                <p>Surface 20 = Partial Modal</p>
                                <p>Surface 30 = Popup, Dialog</p>
                                <p>Surface Inverse = Contrasting</p>
                                <p>Surface Overlay = Behind Modal</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles.col} data-col-12>
                    <div className={styles.row}>
                        <div className={styles.col} data-col-3>
                            <h5 className="heading-with-margin">EMPHASIS colors are used for links, buttons and other interactive elements</h5>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-emphasis-fill)' }}></span>
                                <span>Emphasis Fill</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-emphasis-fill-contrast)' }}></span>
                                <span>Emphasis Fill Contrast</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-emphasis-text)' }}></span>
                                <span>Emphasis Text</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-emphasis-10)' }}></span>
                                <span>Emphasis 10</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-emphasis-20)' }}></span>
                                <span>Emphasis 20</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-emphasis-30)' }}></span>
                                <span>Emphasis 30</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-emphasis-40)' }}></span>
                                <span>Emphasis 40</span>
                            </div>
                        </div>
                        <div className={styles.col} data-col-3>
                            <h5 className="heading-with-margin">SUCCESS colors are used for confirmations and other success messages</h5>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-success-fill)' }}></span>
                                <span>Success Fill</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-success-fill-contrast)' }}></span>
                                <span>Success Fill Contrast</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-success-text)' }}></span>
                                <span>Success Text</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-success-10)' }}></span>
                                <span>Success 10</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-success-20)' }}></span>
                                <span>Success 20</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-success-30)' }}></span>
                                <span>Success 30</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-success-40)' }}></span>
                                <span>Success 40</span>
                            </div>
                        </div>
                        <div className={styles.col} data-col-3>
                            <h5 className="heading-with-margin">WARNING colors are used for warnings, notifications and other non-breaking alerts</h5>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-warning-fill)' }}></span>
                                <span>Warning Fill</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-warning-fill-contrast)' }}></span>
                                <span>Warning Fill Contrast</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-warning-text)' }}></span>
                                <span>Warning Text</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-warning-10)' }}></span>
                                <span>Warning 10</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-warning-20)' }}></span>
                                <span>Warning 20</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-warning-30)' }}></span>
                                <span>Warning 30</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-warning-40)' }}></span>
                                <span>Warning 40</span>
                            </div>
                        </div>
                        <div className={styles.col} data-col-3>
                            <h5 className="heading-with-margin">CRITICAL colors are used for errors and other situations where user input is required</h5>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-critical-fill)' }}></span>
                                <span>Critical Fill</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-critical-fill-contrast)' }}></span>
                                <span>Critical Fill Contrast</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-critical-text)' }}></span>
                                <span>Critical Text</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-critical-10)' }}></span>
                                <span>Critical 10</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-critical-20)' }}></span>
                                <span>Critical 20</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-critical-30)' }}></span>
                                <span>Critical 30</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-critical-40)' }}></span>
                                <span>Critical 40</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.col} data-col-12>
                    <div className={styles.row}>
                        <div className={styles.col} data-col-12>
                            <h5 className="heading-with-margin">Base colors</h5>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-body-color)' }}></span>
                                <span>Background</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-body-text-color)' }}></span>
                                <span>Body Text</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-body-text-color-subtle)' }}></span>
                                <span>Body Text Subtle</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-body-text-color-contrast)' }}></span>
                                <span>Body Text Contrast</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-heading-color)' }}></span>
                                <span>Heading</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-label-color)' }}></span>
                                <span>Label</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-scrollbar-color)' }}></span>
                                <span>Scrollbar</span>
                            </div>
                            <div className={styles["example__color-shade-col"]}>
                                <span className={styles["example__color-shade"]} style={{ backgroundColor: 'var(--theme-scrollbar-thumb-color)' }}></span>
                                <span>Scrollbar Thumb</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Accordion */}
            <h3 id="accordion" className={`${styles["heading-with-margin"]} heading-with-margin`}>Accordion</h3>
            <div className={`${styles.row} ${styles['row--divider']} ${styles['example__row']}`}>
                <div className={styles.col} data-col-12>
                    <div className={`${styles.row} ${styles['example__options-switcher']}`}>
                        <div className={styles.col} data-col-3>
                        <label>Choose size</label>
                        <select value={accordionSize} onChange={(e) => setAccordionSize(e.target.value)}>
                            <option value="small">small</option>
                            <option value="medium">medium</option>
                            <option value="large">large</option>
                        </select>
                        </div>
                        <div className={styles.col} data-col-3>
                            <CheckboxSingle
                                value={accordionDivider}
                                label="Show divider"
                                onChange={() => setAccordionDivider(!accordionDivider)}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.col} data-col-6>
                <h4 className={`${styles["heading-with-margin"]} heading-with-margin`}>
                    size: {accordionSize}{accordionDivider && ', with divider'}
                </h4>
                <Accordion
                    accordionItems={accordionItems1}
                    size={accordionSize}
                    hideDivider={!accordionDivider}
                    allowedTags={['p', 'ul', 'li']}
                    richTextFormatting
                />
                </div>
                <div className={styles.col} data-col-6>
                <h4 className={`${styles["heading-with-margin"]} heading-with-margin`}>
                    with custom icons, size: {accordionSize}{accordionDivider && ', with divider'}
                </h4>
                <Accordion
                    accordionItems={accordionItems2}
                    size={accordionSize}
                    hideDivider={!accordionDivider}
                    expandIcon="add"
                    collapseIcon="remove"
                />
                </div>
            </div>

            {/* Pills */}
            <h3 id="pills" className={`${styles["heading-with-margin"]} heading-with-margin`}>Pills</h3>
            <div className={`${styles.row} ${styles['row--divider']} ${styles['example__row']}`}>
                <div className={styles.col} data-col-12>
                    <div className={`${styles.row} ${styles['example__options-switcher']}`}>
                        <div className={styles.col} data-col-3>
                            <label>Choose variant</label>
                            <select value={pillVariant} onChange={(e) => setPillVariant(e.target.value as IPillProps['variant'])}>
                                <option value="fill">fill</option>
                                <option value="outline">outline</option>
                                <option value="text">text</option>
                            </select>
                        </div>
                        <div className={styles.col} data-col-3>
                            <label>Choose size</label>
                            <select value={pillSize} onChange={(e) => setPillSize(e.target.value as IPillProps['size'])}>
                                <option value="small">small</option>
                                <option value="normal">normal</option>
                            </select>
                        </div>
                        <div className={styles.col} data-col-3>
                            <label>Choose shape</label>
                            <select value={pillShape} onChange={(e) => setPillShape(e.target.value as IPillProps['shape'])}>
                                <option value="pill">pill</option>
                                <option value="rounded">rounded</option>
                                <option value="squared">squared</option>
                            </select>
                        </div>

                        {/* TODO: This should be using the form/checkbox component */}
                        <div className={styles.col} data-col-3>
                            <label>Additional options</label>
                            <div>
                                <CheckboxSingle
                                    value={pillUppercase}
                                    label="Uppercase"
                                    onChange={() => setPillUppercase(!pillUppercase)}
                                />

                                <CheckboxSingle
                                    value={pillInteractive}
                                    label="Interactive"
                                    onChange={() => setPillInteractive(!pillInteractive)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.col} data-col-6>
                    <h4 className={`${styles["heading-with-margin"]} heading-with-margin`}>
                        variant: {pillVariant}, size: {pillSize}, shape: {pillShape}
                        {pillUppercase && ', uppercase'}
                    </h4>
                    {pillTypes.map((type) => (
                        <Pill
                            key={type}
                            label={type!.replace('-', ' ').charAt(0).toUpperCase() + type!.slice(1)}
                            type={type}
                            variant={pillVariant}
                            size={pillSize}
                            shape={pillShape}
                            uppercase={pillUppercase}
                            interactive={pillInteractive}
                        />
                    ))}
                </div>
            </div>

            {/* Breadcrumb */}
            <h3 id="breadcrumb" className={`${styles["heading-with-margin"]} heading-with-margin`}>Breadcrumb</h3>
            <div className={`${styles.row} ${styles['row--divider']} ${styles['example__row']}`}>
                <div className={styles.col} data-col-12>
                    <div className={`${styles.row} ${styles['example__options-switcher']}`}>
                        <div className={styles.col} data-col-3>
                            <label>Choose size</label>
                            <select value={breadcrumbSize} onChange={(e) => setBreadcrumbSize(e.target.value as IBreadcrumbProps['size'])}>
                                <option value="small">small</option>
                                <option value="medium">medium</option>
                                <option value="large">large</option>
                            </select>
                        </div>
                        <div className={styles.col} data-col-3>
                            <CheckboxSingle
                                value={breadcrumbUppercase}
                                label="Uppercase"
                                onChange={() => setBreadcrumbUppercase(!pillUppercase)}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.col} data-col-12>
                    <h4 className={`${styles["heading-with-margin"]} heading-with-margin`}>
                        size: {breadcrumbSize}
                    </h4>
                    <Breadcrumb breadcrumb={breadcrumb} size={breadcrumbSize} uppercase={breadcrumbUppercase} />
                </div>
            </div>

            {/* Buttons */}
            <h3 id="buttons" className={`${styles["heading-with-margin"]} heading-with-margin`}>Buttons</h3>
            <div className={`${styles.row} ${styles['row--divider']} ${styles['example__row']}`}>
                <div className={styles.col} data-col-12>
                    <div className={`${styles.row} ${styles['example__options-switcher']}`}>
                        <div className={styles.col} data-col-3>
                            <label>Choose size</label>
                            <select value={buttonSize} onChange={(e) => setButtonSize(e.target.value as IButtonProps['size'])}>
                                <option value="compact">compact</option>
                                <option value="small">small</option>
                                <option value="medium">medium</option>
                                <option value="large">large</option>
                            </select>
                        </div>
                        <div className="col" data-col-3>
                            <label>Additional options</label>
                            <div>
                                <CheckboxSingle
                                    value={buttonDisabled}
                                    label="Disabled"
                                    onChange={() => setButtonDisabled(!buttonDisabled)}
                                />

                                <CheckboxSingle
                                    value={buttonDestructive}
                                    label="Destructive"
                                    onChange={() => setButtonDestructive(!buttonDestructive)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.col} data-col-12>
                    <h4 className={styles['heading-with-margin']}>Primary fill, size: {buttonSize} {buttonDisabled && <span>, disabled</span>} {buttonDestructive && <span>, destructive</span>}</h4>
                    <div className={styles['example__section-divider']}>
                        <Button label="Primary button" style="fill" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button iconPrefix="close" style="fill" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown button" style="fill" isDropdown size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown toggle disabled" style="fill" isDropdown disableDropdownToggle size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown button" sublabel="Sublabel" style="fill" isDropdown size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown button" sublabel="Toggle disabled" style="fill" isDropdown disableDropdownToggle size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                    </div>
                    <h4 className={styles['heading-with-margin']}>Primary outline, size: {buttonSize} {buttonDisabled && <span>, disabled</span>} {buttonDestructive && <span>, destructive</span>}</h4>
                    <div className={styles['example__section-divider']}>
                        <Button label="Primary button" style="outline" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button iconPrefix="close" style="outline" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown button" style="outline" isDropdown size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown toggle disabled" style="outline" isDropdown disableDropdownToggle size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown button" sublabel="Sublabel" style="outline" isDropdown size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown button" sublabel="Toggle disabled" style="outline" isDropdown disableDropdownToggle size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                    </div>
                    <h4 className={styles['heading-with-margin']}>Secondary fill, size: {buttonSize} {buttonDisabled && <span>, disabled</span>} {buttonDestructive && <span>, destructive</span>}</h4>
                    <div className={styles['example__section-divider']}>
                        <Button label="Secondary button" variant="secondary" style="fill" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button iconPrefix="close" variant="secondary" style="fill" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown button" variant="secondary" style="fill" isDropdown size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown toggle disabled" variant="secondary" style="fill" isDropdown disableDropdownToggle size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown button" sublabel="Sublabel" variant="secondary" style="fill" isDropdown size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown button" sublabel="Toggle disabled" variant="secondary" style="fill" isDropdown disableDropdownToggle size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                    </div>
                    <h4 className={styles['heading-with-margin']}>Secondary outline, size: {buttonSize} {buttonDisabled && <span>, disabled</span>} {buttonDestructive && <span>, destructive</span>}</h4>
                    <div className={styles['example__section-divider']}>
                        <Button label="Secondary button" variant="secondary" style="outline" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button iconPrefix="close" variant="secondary" style="outline" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown button" variant="secondary" style="outline" isDropdown size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown toggle disabled" variant="secondary" style="outline" isDropdown disableDropdownToggle size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown button" sublabel="Sublabel" variant="secondary" style="outline" isDropdown size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown button" sublabel="Toggle disabled" variant="secondary" style="outline" isDropdown disableDropdownToggle size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                    </div>
                    <h4 className={styles['heading-with-margin']}>
                        Neutral
                        <span
                            x-data="{ tooltip: document.querySelector('#neutral-fill-tooltip') }"
                            x-init="Theme.UITooltip.createPopper($el, tooltip, { boundary: '.example__row' });"
                            style={{ cursor: 'pointer' }}
                            // onMouseEnter={() => Theme.UITooltip.toggleTooltip(tooltip, true)}
                            // onMouseLeave={() => Theme.UITooltip.toggleTooltip(tooltip, false)}
                        >
                            <IconInput name="info" />
                        </span>
                        fill, size: {buttonSize} {buttonDisabled && <span>, disabled</span>} {buttonDestructive && <span>, destructive</span>}
                    </h4>
                    <div className={styles['example__section-divider']}>
                        <Button label="Neutral button" variant="neutral" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button iconPrefix="close" variant="neutral" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown button" variant="neutral" isDropdown size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown toggle disabled" variant="neutral" isDropdown disableDropdownToggle size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown button" sublabel="Sublabel" variant="neutral" isDropdown size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown button" sublabel="Toggle disabled" variant="neutral" isDropdown disableDropdownToggle size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                    </div>
                    <h4 className={styles['heading-with-margin']}>
                        Neutral
                        <span
                            x-data="{ tooltip: document.querySelector('#neutral-outline-tooltip') }"
                            x-init="Theme.UITooltip.createPopper($el, tooltip, { boundary: '.example__row' });"
                            style={{ cursor: 'pointer' }}
                            // onMouseEnter={() => Theme.UITooltip.toggleTooltip(tooltip, true)}
                            // onMouseLeave={() => Theme.UITooltip.toggleTooltip(tooltip, false)}
                        >
                            <IconInput name="info" />
                        </span>
                        outline, size: {buttonSize} {buttonDisabled && <span>, disabled</span>} {buttonDestructive && <span>, destructive</span>}
                    </h4>
                    <div className={styles['example__section-divider']}>
                        <Button label="Neutral button" variant="neutral" style="outline" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button iconPrefix="close" variant="neutral" style="outline" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown button" variant="neutral" style="outline" isDropdown size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown toggle disabled" variant="neutral" style="outline" isDropdown disableDropdownToggle size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown button" sublabel="Sublabel" variant="neutral" style="outline" isDropdown size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown button" sublabel="Toggle disabled" variant="neutral" style="outline" isDropdown disableDropdownToggle size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                    </div>
                    <h4 className={styles['heading-with-margin']}>With icons, size: {buttonSize} {buttonDisabled && <span>, disabled</span>} {buttonDestructive && <span>, destructive</span>}</h4>
                    <div className={styles['example__section-divider']}>
                        <Button label="Primary fill" iconPrefix="widgets" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Primary outline" iconPrefix="widgets" style="outline" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Secondary outline" variant="secondary" iconPrefix="widgets" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Secondary fill" variant="secondary" style="fill" iconPrefix="widgets" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Neutral fill" variant="neutral" iconPrefix="widgets" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Neutral outline" variant="neutral" style="outline" iconPrefix="widgets" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown button" variant="neutral" style="outline" isDropdown iconPrefix="widgets" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown button" variant="neutral" style="outline" isDropdown iconSuffix="info" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown button" variant="neutral" style="outline" isDropdown iconPrefix="widgets" iconSuffix="info" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown button" sublabel="Sublabel" variant="neutral" style="outline" isDropdown size="large" iconPrefix="widgets" disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown button" sublabel="Sublabel" variant="neutral" style="outline" isDropdown iconSuffix="info" size="large" disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown button" sublabel="Sublabel" variant="neutral" style="outline" isDropdown iconPrefix="widgets" iconSuffix="info" size="large" disabled={buttonDisabled} destructive={buttonDestructive} />
                    </div>
                    <h4 className={styles['heading-with-margin']}>Opaque, size: {buttonSize} {buttonDisabled && <span>, disabled</span>} {buttonDestructive && <span>, destructive</span>}</h4>
                    <div className={styles.row}>
                        <div className={styles.col} data-col-6 style={{ marginBottom: '16px' }}>
                            <CheckboxSingle
                                label="Opaque"
                                sublabel="Makes buttons visible on any background"
                                value={buttonOpaque}
                                onChange={() => setButtonOpaque(!buttonOpaque)}
                            />
                        </div>
                    </div>
                    <div
                        className={styles['example__section-divider']}
                        style={{ backgroundImage: 'url(/images/placeholder.jpeg)', backgroundColor: 'black', backgroundSize: 'cover', padding: '16px' }}
                    >
                        <Button label="Primary fill" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} opaque={buttonOpaque} />
                        <Button label="Primary outline" style="outline" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} opaque={buttonOpaque} />
                        <Button label="Secondary outline" variant="secondary" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} opaque={buttonOpaque} />
                        <Button label="Secondary fill" variant="secondary" style="fill" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} opaque={buttonOpaque} />
                        <Button label="Neutral fill" variant="neutral" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} opaque={buttonOpaque} />
                        <Button label="Neutral outline" variant="neutral" style="outline" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} opaque={buttonOpaque} />
                        <Button label="Dropdown button" variant="neutral" style="outline" isDropdown size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} opaque={buttonOpaque} />
                        <Button label="Dropdown button" sublabel="Sublabel" variant="neutral" style="outline" isDropdown size="large" disabled={buttonDisabled} destructive={buttonDestructive} opaque={buttonOpaque} />
                    </div>
                    <h4 className={styles['heading-with-margin']}>Tertiary, size: {buttonSize} {buttonDisabled && <span>, disabled</span>} {buttonDestructive && <span>, destructive</span>}</h4>
                    <div className={styles['example__section-divider']}>
                        <Button label="Tertiary button" variant="tertiary" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button iconPrefix="close" variant="tertiary" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown button" variant="tertiary" isDropdown size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown button" sublabel="Sublabel" variant="tertiary" isDropdown size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                    </div>
                    <h4 className={styles['heading-with-margin']}>Subtle, size: {buttonSize} {buttonDisabled && <span>, disabled</span>} {buttonDestructive && <span>, destructive</span>}</h4>
                    <div className={styles['example__section-divider']}>
                        <Button label="Subtle button" variant="subtle" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button iconPrefix="close" variant="subtle" size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown button" variant="subtle" isDropdown size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                        <Button label="Dropdown button" sublabel="Sublabel" variant="subtle" isDropdown size={buttonSize} disabled={buttonDisabled} destructive={buttonDestructive} />
                    </div>
                    <h4 className={styles['heading-with-margin']}>Row</h4>
                    <div className={styles['example__section-divider']} style={{ flexFlow: 'column', maxWidth: '250px', gap: '0' }}>
                        <Button label="Row button" iconPrefix="navigate_next" variant="row" />
                        <Button label="Disabled button" disabled variant="row" />
                        <Button label="Destructive button" destructive variant="row" />
                        <Button label="Destructive disabled button" iconPrefix="navigate_next" destructive disabled variant="row" />
                    </div>
                    <h4 className={styles['heading-with-margin']}>Text link</h4>
                    <div className={styles['example__section-divider']}>
                        <div style={{ padding: '16px' }}>
                            <Button label="Link" link="#" />
                        </div>
                        <div style={{ backgroundColor: 'var(--theme-surface-inverse)', padding: '16px' }}>
                            <Button label="Link contrast" link="#" contrast />
                        </div>
                    </div>
                </div>
            </div>


            {/* TODO: Carousel */}


            {/* TODO: Card */}
            <h3 id="card" className={`${styles["heading-with-margin"]} heading-with-margin`}>Card</h3>
            <div className={`${styles.row} ${styles['row--divider']} ${styles.example__row}`}>
                <div className={`${styles.col}`} data-col-6>
                    <h4 className={styles['heading-with-margin']}>with content variant</h4>
                    <Card>
                        <div>Content here</div>
                    </Card>
                </div>
                <div className={styles.col} data-col-6>
                    <h4 className={styles['heading-with-margin']}>with action variant</h4>
                    <Card variant="action">
                        <div>
                            <h4>Title</h4>
                            <p>Text goes here</p>
                        </div>
                    </Card>
                </div>
                <div className={styles.col} data-col-6>
                    <h4 className={styles['heading-with-margin']}>with selected</h4>
                    <Card variant="action" selected>
                        <div>
                            <h4>Title</h4>
                            <p>Text goes here</p>
                        </div>
                    </Card>
                </div>
                <div className={styles.col} data-col-6>
                    <h4 className={styles['heading-with-margin']}>with error</h4>
                    <Card variant="action" invalid={true}>
                        <div>
                            <h4>Title</h4>
                            <p>Text goes here</p>
                        </div>
                    </Card>
                </div>
            </div>

            {/* TODO: Dialog */}

            {/* TODO: Google Map */}
            <h3 id="google-map" className={`${styles["heading-with-margin"]} heading-with-margin`}>Google map</h3>
            <div className={styles["row row--divider example__row"]}>
                <div className={styles.col} data-col-6>
                    <h4 className={styles["heading-with-margin"]}>with single marker</h4>
                    <div>
                        <GoogleMap mapConfig={singlePinMapConfig} />
                    </div>
                </div>
                <div className={styles.col} data-col-6>
                    <h4 className={styles["heading-with-margin"]}>with multiple markers</h4>
                    <div>
                        <GoogleMap mapConfig={multiplePinsMapConfig} />
                    </div>
                </div>
            </div>


            {/* Icons */}
            <h3 id="icons" className={`${styles["heading-with-margin"]} heading-with-margin`}>Icons</h3>
            <div className={`${styles.row} ${styles['row--divider']} ${styles['example__row']}`}>
                <div className={styles.col} data-col-6>
                    <IconInput name="add" />
                    <IconInput name="arrow_back" />
                    <IconInput name="arrow_back_ios" />
                    <IconInput name="arrow_circle_up" />
                    <IconInput name="arrow_forward" />
                    <IconInput name="bolt" />
                    <IconInput name="call" />
                    <IconInput name="check_circle" />
                    <IconInput name="close" />
                    <IconInput name="directions" />
                    <IconInput name="error" />
                    <IconInput name="expand_less" />
                    <IconInput name="expand_more" />
                    <IconInput name="image" />
                    <IconInput name="info" />
                    <IconInput name="location_on" />
                    <IconInput name="map" />
                    <IconInput name="menu" />
                    <IconInput name="navigate_before" />
                    <IconInput name="navigate_next" />
                    <IconInput name="phone" />
                    <IconInput name="remove" />
                    <IconInput name="schedule" />
                    <IconInput name="search" />
                    <IconInput name="sell" />
                    <IconInput name="shopping_bag" />
                    <IconInput name="star" />
                    <IconInput name="star_rate_half" />
                    <IconInput name="star_rate_empty" />
                    <IconInput name="verified" />
                    <IconInput name="warning" />
                    <IconInput name="widgets" />
                </div>
            </div>

            {/* TODO: Image */}

            {/* Loader */}
            <h3 id="loader" className={`${styles["heading-with-margin"]} heading-with-margin`}>Loader</h3>
            <div className={`${styles.row} ${styles['row--divider']} ${styles['example__row']}`}>
                <div className={styles.col} data-col-12>
                    <div className={`${styles.row} ${styles['example__options-switcher']}`}>
                        <div className={styles.col} data-col-3>
                            <label>Choose size</label>
                            <select value={loaderSize} onChange={(e) => setLoaderSize(e.target.value as ILoaderProps['size'])}>
                                <option value="small">small</option>
                                <option value="medium">medium</option>
                                <option value="large">large</option>
                                <option value="extra-large">extra large</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className={styles.col} data-col-12>
                    <div className={`${styles.row}`}>
                        <div className={styles.col} data-col-6>
                            <h4 className={`${styles["heading-with-margin"]} heading-with-margin`}>
                                size: {(loaderSize ?? 'small').replace('-', ' ')}
                            </h4>
                            <Loader size={loaderSize} />
                        </div>
                        <div className={styles.col} data-col-6 style={{ backgroundColor: 'var(--theme-surface-inverse)', padding: '16px', color: 'var(--theme-fill-inverse-solid)' }}>
                            <h4 className={`${styles["heading-with-margin"]} heading-with-margin`} style={{ color: 'inherit' }}>
                                with contrast, size: {(loaderSize ?? 'small').replace('-', ' ')}
                            </h4>
                            <Loader size={loaderSize} contrast />
                        </div>
                    </div>
                </div>
            </div>

            {/* Marquee */}
            <h3 id="marquee" className={`${styles["heading-with-margin"]} heading-with-margin`}>Marquee</h3>
            <div className={`${styles.row} ${styles['row--divider']} ${styles['example__row']}`}>
                <div className={styles.col} data-col-6>
                    <div style={{ width: "100%", overflow: "hidden" }}>
                        <Marquee content="Marquee test content" />
                    </div>
                </div>
            </div>

            {/* Menu */}
            <h3 id="menu" className={`${styles["heading-with-margin"]} heading-with-margin`}>Menu</h3>
            <div className={`${styles.row} ${styles['row--divider']} ${styles.example__row}`}>
                <div className={styles.col} data-col-12>
                    <div className={`${styles.row} ${styles.example__optionsSwitcher}`}>
                        <div className={styles.col} data-col-3>
                            <label>
                                Choose size
                                <select value={menuSize} onChange={(e) => setMenuSize(e.target.value as IMenuProps['size'])}>
                                    <option value="small">small</option>
                                    <option value="medium">medium</option>
                                </select>
                            </label>
                        </div>
                    </div>
                </div>
                <div className={styles.col} data-col-6>
                    <h4 className={styles.headingWithMargin}>
                        size: <span>{menuSize}</span>
                    </h4>
                    <Menu
                        items={[
                            { label: 'item 1', value: '1' },
                            { label: 'item 2', value: '2' },
                            { label: 'item 3', value: '3', disabled: true },
                        ]}
                        size={menuSize}
                    />
                </div>
            </div>

            {/* Notice */}
            <h3 id="notice" className={`${styles["heading-with-margin"]} heading-with-margin`}>Notice</h3>
            <div className={`${styles.row} ${styles['row--divider']} ${styles['example__row']}`}>
                <div className={styles.col} data-col-6>
                    <h4 className={`${styles["heading-with-margin"]} heading-with-margin`}>inline style</h4>
                    <Notice message="Default message goes here" />
                    <Notice message="Info message goes here" variant="info" />
                    <Notice message="Success message goes here" variant="success" />
                    <Notice message="Warning message goes here" variant="warning" />
                    <Notice message="Critical message goes here" variant="critical" />
                </div>
                <div className={styles.col} data-col-6>
                    <h4 className={`${styles["heading-with-margin"]} heading-with-margin`}>banner style</h4>
                    <Notice title="Default title" message="Default message goes here" linkText="Text link" linkAction={() => { window.location.href = '/' }} bannerStyle="banner" />
                    <br />
                    <Notice title="Default title" message="Default message goes here" linkText="Text link" linkAction={() => { window.location.href = '/' }} bannerStyle="banner" linkPosition="bottom" />
                    <br />
                    <Notice title="Default title" message="Info message goes here" linkText="Text link" linkAction={() => { window.location.href = '/' }} variant="info" bannerStyle="banner" />
                    <br />
                    <Notice title="Default title" message="Info message goes here" linkText="Text link" linkAction={() => { window.location.href = '/' }} variant="info" bannerStyle="banner" linkPosition="bottom" />
                    <br />
                    <Notice title="Default title" message="Success message goes here" linkText="Text link" linkAction={() => { window.location.href = '/' }} variant="success" bannerStyle="banner" />
                    <br />
                    <Notice title="Default title" message="Success message goes here" linkText="Text link" linkAction={() => { window.location.href = '/' }} variant="success" bannerStyle="banner" linkPosition="bottom" />
                    <br />
                    <Notice title="Default title" message="Warning message goes here" linkText="Text link" linkAction={() => { window.location.href = '/' }} variant="warning" bannerStyle="banner" />
                    <br />
                    <Notice title="Default title" message="Warning message goes here" linkText="Text link" linkAction={() => { window.location.href = '/' }} variant="warning" bannerStyle="banner" linkPosition="bottom" />
                    <br />
                    <Notice title="Default title" message="Critical message goes here" linkText="Text link" linkAction={() => { window.location.href = '/' }} variant="critical" bannerStyle="banner" />
                    <br />
                    <Notice title="Default title" message="Critical message goes here" linkText="Text link" linkAction={() => { window.location.href = '/' }} variant="critical" bannerStyle="banner" linkPosition="bottom" />
                    {/* Multiple Links */}
                    <br />
                    <Notice title="Default title" message="Critical message goes here" linkText="Text link" linkAction={() => { window.location.href = '/' }} secondLinkText="Second text link" secondLinkAction={() => { window.location.href = '/' }} bannerStyle="banner" />
                    <br />
                    <Notice title="Default title" message="Critical message goes here" linkText="Text link" linkAction={() => { window.location.href = '/' }} secondLinkText="Second text link" secondLinkAction={() => { window.location.href = '/' }} bannerStyle="banner" linkPosition="bottom" />
                </div>
            </div>

        </div>
    );
}