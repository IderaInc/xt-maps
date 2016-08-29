var gulp = require('gulp'),
    closureCompiler = require('google-closure-compiler').gulp(),
    del = require('del'),
    fs = require('fs'),
    argArr = process.argv,
    argLen = argArr.length,
    ARGUMENTS = {},
    arg;

// If more then two arguments passed
// Extract all arguments and store it into ARGUMENTS
if (argLen > 2) {
    while (argLen-- > 1) {
        arg = argArr[argLen];
        if (/^\-\-/.test(arg)) {
            arg = arg.split(/\=|\:/);
            ARGUMENTS[arg[0].replace(/^\-\-/, '')] = (arg[1] && /\,/.test(arg[1]) && arg[1].split(/\,/)) || (arg[1] || '');
        }
    }
}

// Clear temporary build path and other output folders
function clearFiles (path) {
    return del([
        path + '*'
    ]);
}

function compileFile (src, dest) {
    path = dest.split(/[\\\/]/);
    var file = path[path.length -1],
        dir = path.splice(0, path.length - 1).join('/');
    return gulp.src(src)
        .pipe(closureCompiler({
            js_output_file: file,
            externs: [
              'develop/ci/build/externs.js'
            ],
            extra_annotation_name: [
                "todo",
                "note",
                "callback",
                "var",
                "section",
                "alias",
                "mixin",
                "mixer",
                "group",
                "groupInfo",
                "meta"
            ],
            // only_closure_dependencies: false,
            charset: 'utf8',
            jscomp_error: [
                "accessControls",
                "ambiguousFunctionDecl",
                "checkDebuggerStatement",
                "checkRegExp",
                "const",
                "constantProperty",
                "deprecated",
                "externsValidation",
                "fileoverviewTags",
                "globalThis",
                "misplacedTypeAnnotation",
                "nonStandardJsDocs",
                "suspiciousCode",
                "uselessCode",
                "visibility"
            ],
            language_in: 'ECMASCRIPT3',
            jscomp_off: [
                'es5Strict'
            ],
            jscomp_warning: 'suspiciousCode'
        }))
        .pipe(gulp.dest(dir));
}

// Closure-compiler
gulp.task('compile', function () {
    if (!ARGUMENTS['source'] || !ARGUMENTS['destination']) {
        console.log('source or destination file not provided!');
        return 1;
    }
    console.log("\n\nCompiling file: ", ARGUMENTS['source'], " -> ", ARGUMENTS['destination'], "\n");
    compileFile(ARGUMENTS['source'], ARGUMENTS['destination']);
});

gulp.task('default', function () {

    // compileFile('./out/_build/fusioncharts.world.js', './src/fusioncharts.world.js');

    console.log('\n\nEmpty default task!\n\n');
});

// Default build complete package
// gulp.task('encapsulate', function () {
//     var path = './source/js/maps/',
//         dest = './src/',
//         files = fs.readdirSync(path),
//         i = 0,
//         l = files && files.length,
//         intro =  "\n\
// (function (factory) {\n\
//     if (typeof module === 'object' && typeof module.exports !== 'undefined') {\n\
//         module.exports = factory;\n\
//     } else {\n\
//         factory(FusionCharts);\n\
//     }\n\
// }(function (FusionCharts) {\n\
// ",
//         outro = "\n\
// }));\n\
// ",
//         data;

//     for (; i < l; i++) {
//         if (/\.js/.test(files[i])) {
//             data = fs.readFileSync(path + files[i], 'utf8');
//             data = data.replace(/(.*\n)/g, function (a, b) {
//                 if (a.replace(/\s+/, '') === '') {
//                     return '\n';
//                 } else {
//                     return '    ' + a;
//                 }
//             });
//             // data = data.replace(/\s+\n/g, '\n\n');
//             // fs.writeFileSync(dest + files[i], data, 'utf8');
//             fs.writeFileSync(dest + files[i], (intro + data + outro), 'utf8');

//             console.log(files[i]);
//         }
//     }
// });
