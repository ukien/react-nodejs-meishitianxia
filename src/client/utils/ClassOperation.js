/**
 * Created by Administrator on 2017/2/8.
 */
export function addClass(className,addClassName) {
    className = className || '';
    addClassName = addClassName || '';
        if ( className ) {
            if ( (' ' + className + ' ').indexOf( ' ' + addClassName + ' ' ) == -1 ) {
                className += ' ' + addClassName;
            }
        } else {
            className = addClassName;
        }
    return className;
}

export function removeClass(className,remvoeClassName) {
    className = className || '';
    remvoeClassName = remvoeClassName || '';
    var rclassName = new RegExp( ' ' + remvoeClassName + ' ', 'g' );
    className = ' ' + className + ' ';
    className = className
        .replace( rclassName, ' ' )
        .replace( /\s+/g, ' ')
        .trim();
    return className;
}