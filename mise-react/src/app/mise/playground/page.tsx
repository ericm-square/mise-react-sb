import Pill, { IPillProps } from "@/components/theme/partials/ui/Pill/Pill";
import { useState } from "react";
import styles from './PlaygroundPage.module.css';
import Breadcrumb, { IBreadcrumbProps } from "@/components/theme/partials/ui/Breadcrumb/Breadcrumb";
import Marquee from "@/components/theme/partials/ui/Marquee/Marquee";
import Loader, { ILoaderProps } from "@/components/theme/partials/ui/Loader/Loader";
import IconInput from "@/components/theme/partials/macros/IconInput/IconInput";

export default function PlaygroundPage() {

    // Pill...
    const pillTypes: IPillProps['type'][] = ['info', 'warning', 'success', 'critical', 'emphasis'];
    const [pillVariant, setPillVariant] = useState<IPillProps['variant']>('fill');
    const [pillSize, setPillSize] = useState<IPillProps['size']>('small');
    const [pillShape, setPillShape] = useState<IPillProps['shape']>('rounded');
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

    // Loader
    const [loaderSize, setLoaderSize] = useState<ILoaderProps['size']>('small');


    
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

            {/* Pills */}
            <h3 id="pills" className={styles["heading-with-margin"]}>Pills</h3>
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
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={pillUppercase}
                                        onChange={(e) => setPillUppercase(e.target.checked)}
                                    />
                                    Uppercase
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={pillInteractive}
                                        onChange={(e) => setPillInteractive(e.target.checked)}
                                    />
                                    Interactive
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.col} data-col-6>
                    <h4 className={styles["heading-with-margin"]}>
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
            <h3 id="breadcrumb" className={styles["heading-with-margin"]}>Breadcrumb</h3>
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
                            <label>Uppercase</label>
                            <input
                                type="checkbox"
                                checked={breadcrumbUppercase}
                                onChange={(e) => setBreadcrumbUppercase(e.target.checked)}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.col} data-col-12>
                    <h4 className={styles["heading-with-margin"]}>
                        size: {breadcrumbSize}
                    </h4>
                    <Breadcrumb breadcrumb={breadcrumb} size={breadcrumbSize} uppercase={breadcrumbUppercase} />
                </div>
            </div>

            {/* Icons */}
            <h3 id="icons" className={styles["heading-with-margin"]}>Icons</h3>
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
            <h3 id="loader" className={styles["heading-with-margin"]}>Loader</h3>
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
                            <h4 className={styles['heading-with-margin']}>
                                size: {(loaderSize ?? 'small').replace('-', ' ')}
                            </h4>
                            <Loader size={loaderSize} />
                        </div>
                        <div className={styles.col} data-col-6 style={{ backgroundColor: 'var(--theme-surface-inverse)', padding: '16px', color: 'var(--theme-fill-inverse-solid)' }}>
                            <h4 className={styles["heading-with-margin"]} style={{ color: 'inherit' }}>
                                with contrast, size: {(loaderSize ?? 'small').replace('-', ' ')}
                            </h4>
                            <Loader size={loaderSize} contrast />
                        </div>
                    </div>
                </div>
            </div>

            {/* Marquee */}
            <h3 id="marquee" className={styles["heading-with-margin"]}>Marquee</h3>
            <div className={`${styles.row} ${styles['row--divider']} ${styles['example__row']}`}>
                <div className={styles.col} data-col-6>
                    <div style={{ width: "100%", overflow: "hidden" }}>
                        <Marquee content="Marquee test content" />
                    </div>
                </div>
            </div>

        </div>
    );
}