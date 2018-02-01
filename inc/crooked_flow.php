
<li class="list-group-item ">River Gauge:&nbsp;<span class="sitename">Below Prineville Resv.</span></li>
<li class="list-group-item ">Flow:&nbsp;<span class="flowNum"><?php echo wpws_get_content('http://levels.wkcc.org/?v=ya1', 'tr:first-child td:nth-child(2)' ); ?>&nbsp;cfs</span></li>
<li class="list-group-item ">Recorded At:&nbsp;<span class="recTime"><?php echo wpws_get_content('http://levels.wkcc.org/?v=ya1', 'tr:first-child td:first-child' ); ?></span></li>