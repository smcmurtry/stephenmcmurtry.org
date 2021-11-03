var img_path = './img/',
    date_format = d3.time.format('%Y-%m-%d'),
    date_format_human = d3.time.format('%B %-d, %Y');


var portfolio_items = [
  {
    title: 'Canadian Voting Reform',
    date: '2016-10-20',
    link: 'http://votingreform.ca/',
    image_fname: 'voting_reform.png'
  },
  {
    title: 'Beaver Dams',
    date: '2015-01-27',
    link: '/beaverdams',
    image_fname: 'beaver_dams.png'
  },
  {
    title: 'Ontario Public Building Energy Consumption',
    date: '2015-04-24',
    link: '/energy_consumption',
    image_fname: 'building_energy.png'
  },
  {
    title: 'Carbon Underground',
    date: '2015-09-23',
    link: '/Carbon_Underground',
    image_fname: 'carbon_underground.png'
  },
  {
    title: 'Christmas Bird Count',
    date: '2015-08-24',
    link: '/christmas_bird_count',
    image_fname: 'christmas_bird_count_2.png'
  },
  {
    title: 'Canadian 2015 Election Map',
    date: '2015-09-09',
    link: '/election_map',
    image_fname: 'election_map.png'
  },
  {
    title: 'Israeli ID System',
    date: '2016-01-18',
    link: '/id_system',
    image_fname: 'id_system.png'
  },
  {
    title: 'Canadian Income Tax Explorer',
    date: '2015-07-23',
    link: '/income_tax',
    image_fname: 'income_tax.png'
  },
  {
    title: 'Weather Chart',
    date: '2015-11-05',
    link: '/weather_chart',
    image_fname: 'weather_chart.png'
  },
  {
    title: 'Middle Class Tax Cut',
    date: '2015-11-14',
    link: '/middle_class_tax_cut',
    image_fname: 'middle_class_tax_cut.png'
  }
];

portfolio_items = portfolio_items.sort(function(x, y){
   return d3.descending(x.date, y.date);
});

portfolio_items.forEach(function(d) {
  var item = d3.select('#portfolio')
    .append('div')
    .attr('class', 'portfolio-item');

  item.append('div')
    .attr('class', 'date')
    .html(date_format_human(date_format.parse(d.date)));

  item.append('div')
    .attr('class', 'title')
    .append('a')
    .attr('href', d.link)
    .html(d.title);

  item.append('div')
    .attr('class', 'pic')
    .attr('onclick', "location.href='" + d.link + "';")
    .style('background-image', 'url(' + img_path + d.image_fname + ')');
})
