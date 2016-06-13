/**
 * Created by dell6 on 2016/5/30.
 */
import 'core-js/es6';
import 'reflect-metadata';
require('zone.js/dist/zone');
if (process.env.ENV === 'production') {
    // Production
} else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}
