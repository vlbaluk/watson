import Page from '../BasePage/Page';
import LoadAveragesChart from './LoadAveragesChart';
import MemoryUsageChart from './MemoryUsageChart';
import RunningProcessesChart from './RunningProcessesChart';
import './SummaryPage.css';
import SwapUsageChart from './SwapUsageChart';

export default class SummaryPage extends Page {
  public render = (): JSX.Element => (
    <main>
      {!this.props.threadDumps.some((dump) => !!dump.loadAverages)
        ? <h4 dangerouslySetInnerHTML={{ __html: SummaryPage.NO_CPU_INFOS }} />
        : (
          <>
            <div id="memory-usages">
              <MemoryUsageChart threadDumps={this.props.threadDumps} />
              <SwapUsageChart threadDumps={this.props.threadDumps} />
            </div>
            <LoadAveragesChart threadDumps={this.props.threadDumps} />
            <RunningProcessesChart threadDumps={this.props.threadDumps} />
          </>
        )}
    </main>
  )
}
