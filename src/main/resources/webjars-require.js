/**
 * @author Thomas Scheinecker, Catalysts GmbH.
 */

requirejs.config({
    paths: {
        'cat-log4angular': webjars.path('cat-log4angular', 'cat-log4angular')
    },
    shim: {
        'cat-log4angular': ['angular']
    }
});