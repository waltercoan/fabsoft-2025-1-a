import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [BaseChartDirective],
  providers: [provideCharts(withDefaultRegisterables())]
})
export class HomeComponent {
  public chartData: ChartConfiguration['data'] = {
    labels: ['Janeiro', 'Fevereiro', 'Março'],
    datasets: [
      { data: [65, 59, 80], label: 'Vendas' },
      { data: [165, 159, 180], label: 'Pedidos' }
    ],
  };

  public chartOptions: ChartOptions = {
    responsive: true,
  };
}
