var semanticSearch = false;
var previous_value = {};

var $rows = $('#transcript tr');
if ($rows) {
    $('#search').keyup(function () {
        var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase().split(' ');
        $rows.hide().filter(function () {
            var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
            var matchesSearch = true;
            $(val).each(function (index, value) {
                matchesSearch = (!matchesSearch) ? false : ~text.indexOf(value);
            });
            return matchesSearch;
        }).show();
    });
}

/*
var builder = $('#builder');
if (builder) {
    builder.queryBuilder({
        rules: {
            condition: 'AND',
            rules: []
        },
        filters: [{
            id: 'SUS',
            label: 'SUS',
            type: 'string'
        },
            {
                id: 'PRE',
                label: 'PRE',
                type: 'string'
            },
            {
                id: 'VER',
                label: 'VER',
                type: 'string'
            },
            {
                id: 'VERGer',
                label: 'VERGer',
                type: 'string'
            },
            {
                id: 'CON',
                label: 'CON',
                type: 'string'
            },
            {
                id: 'DET',
                label: 'DET',
                type: 'string'
            },
            {
                id: 'ADV',
                label: 'ADV',
                type: 'string'
            },
            {
                id: 'ADJ',
                label: 'ADJ',
                type: 'string'
            },
            {
                id: 'PRO',
                label: 'PRO',
                type: 'string'
            }],
        allow_groups: false,
        operators: ['equal'],
        default_filter: 'SUS',
        allow_empty: true
    });
    document.getElementById('builder').style.display = 'none';

    $('#builder').on('afterCreateRuleFilters.queryBuilder', function (e, rule) {
        rule.$el.find('.rule-filter-container select').on('change', function (e) {
            previous_value[rule.id] = rule.$el.find('.rule-value-container input.form-control').val();
        })
    });

    $('#builder').on('afterCreateRuleInput.queryBuilder.filter', function (e, rule) {
        rule.$el.find('.rule-value-container input.form-control').val(previous_value[rule.id])
    });
}
*/

/*
var searchParam = $.url().param('s');
if (searchParam) {
    if (searchParam.indexOf('[') >= 0) {
        var rules = [];
        searchParam.split(' ').forEach(function (r) {
            var match = r.match(/(.*)\[(.*)]/);
            var text = match[1].toLowerCase();
            var filter = match[2].toUpperCase();

            rules.push({
                id: filter,
                value: text
            })
        })

        if (rules) {
            $('#builder').queryBuilder('setRules', {
                condition: 'AND',
                rules: rules
            })
            toggleSemanticSearch();
        }
    }
    else {
        $('#search').val(searchParam);
    }
    search();
}

function toggleSemanticSearch() {
    var builder = document.getElementById('builder');
    var simple = document.getElementById('custom-search-input');
    if (builder.style.display === 'none') {

        var input = $('#search').val();
        if (input) {
            $('#builder').queryBuilder('reset');
            var val = $.trim(input).replace(/ +/g, ' ').toLowerCase().split(' ');
            var rules = [];
            $(val).each(function (index, value) {
                rules.push({
                    id: 'SUS',
                    value: value
                })
            });
            $('#builder').queryBuilder('setRules', {
                condition: 'AND',
                rules: rules
            })
        }

        simple.style.display = 'none';
        builder.style.display = 'block';
        semanticSearch = true;
    } else {

        var o = $('#builder').queryBuilder('getRules');
        var results = [];
        if (o) {
            o.rules.forEach(function (r) {
                results.push(r.value);
            })
        }
        $('#search').val(results.join(' '));

        simple.style.display = 'block';
        builder.style.display = 'none';
        semanticSearch = false;
    }
    search();
}

function search() {
    var $rows = $('#transcript tr');
    if ($rows) {
        if (semanticSearch) {

            var o = $('#builder').queryBuilder('getRules');
            var results = [];
            if (o) {
                o.rules.forEach(function (r) {
                    results.push(r.value + '[' + r.id + ']');
                })
            }
            $rows.hide().filter(function () {
                var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
                var matchesSearch = true;
                $(results).each(function (index, value) {
                    matchesSearch = (!matchesSearch) ? false : ~text.indexOf(value.toLowerCase());
                });
                return matchesSearch;
            }).show();
        }
        else {
            var input = $('#search').val();
            if (input) {
                var val = $.trim(input).replace(/ +/g, ' ').toLowerCase().split(' ');
                $rows.hide().filter(function () {
                    var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
                    var matchesSearch = true;
                    $(val).each(function (index, value) {
                        matchesSearch = (!matchesSearch) ? false : ~text.indexOf(value);
                    });
                    return matchesSearch;
                }).show();
            }
        }
    }
}
*/

function seek(time) {
    var media = document.getElementById('media');
    /*media.pause();*/
    media.currentTime = time;
    media.play();
}

$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        delay: 2000,
        placement: "left",
        html: true,
        trigger: "hover"
    });
});
