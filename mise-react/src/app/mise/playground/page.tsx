import Pill, { IPillProps } from "@/components/theme/partials/ui/Pill/Pill";
import { useState } from "react";
import styles from './PlaygroundPage.module.css';
import Breadcrumb, { IBreadcrumbProps } from "@/components/theme/partials/ui/Breadcrumb/Breadcrumb";

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

    
    return (
        <div className="container" style={{ padding: 40 }}>
            Playground Page

            {/* Pills */}
            <h3 id="pills" className={styles["heading-with-margin"]}>Pills</h3>
            <div className={`${styles.row} ${styles['row--divider']} ${styles['example__row']}`}>
                <div className={`${styles.col} ${styles['col-12']}`}>
                    <div className={`${styles.row} ${styles['example__options-switcher']}`}>
                        <div className={`${styles.col} ${styles['col-3']}`}>
                            <label>Choose variant</label>
                            <select value={pillVariant} onChange={(e) => setPillVariant(e.target.value as IPillProps['variant'])}>
                                <option value="fill">fill</option>
                                <option value="outline">outline</option>
                                <option value="text">text</option>
                            </select>
                        </div>
                        <div className={`${styles.col} ${styles['col-3']}`}>
                            <label>Choose size</label>
                            <select value={pillSize} onChange={(e) => setPillSize(e.target.value as IPillProps['size'])}>
                                <option value="small">small</option>
                                <option value="normal">normal</option>
                            </select>
                        </div>
                        <div className={`${styles.col} ${styles['col-3']}`}>
                            <label>Choose shape</label>
                            <select value={pillShape} onChange={(e) => setPillShape(e.target.value as IPillProps['shape'])}>
                                <option value="pill">pill</option>
                                <option value="rounded">rounded</option>
                                <option value="squared">squared</option>
                            </select>
                        </div>

                        {/* TODO: This should be using the form/checkbox component */}
                        <div className={`${styles.col} ${styles['col-3']}`}>
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
                <div className={`${styles.col} ${styles['col-6']}`}>
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
                <div className={`${styles.col} ${styles['col-12']}`}>
                    <div className={`${styles.row} ${styles['example__options-switcher']}`}>
                        <div className={`${styles.col} ${styles['col-3']}`}>
                            <label>Choose size</label>
                            <select value={breadcrumbSize} onChange={(e) => setBreadcrumbSize(e.target.value as IBreadcrumbProps['size'])}>
                                <option value="small">small</option>
                                <option value="medium">medium</option>
                                <option value="large">large</option>
                            </select>
                        </div>
                        <div className={`${styles.col} ${styles['col-3']}`}>
                            <label>Uppercase</label>
                            <input
                                type="checkbox"
                                checked={breadcrumbUppercase}
                                onChange={(e) => setBreadcrumbUppercase(e.target.checked)}
                            />
                        </div>
                    </div>
                </div>
                <div className={`${styles.col} ${styles['col-12']}`}>
                    <h4 className={styles["heading-with-margin"]}>
                        size: {breadcrumbSize}
                    </h4>
                    <Breadcrumb breadcrumb={breadcrumb} size={breadcrumbSize} uppercase={breadcrumbUppercase} />
                </div>
            </div>

            
        </div>
    );
}