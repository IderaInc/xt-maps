import FusionCharts from 'FusionCharts';
import saga from '../maps/fusioncharts.saga';

FusionCharts.addDep(saga);
FusionCharts.addFile('fusioncharts.saga.js');