"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1266],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},659:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={},s="Topology Discovery",p={unversionedId:"developer/Topology_Discovery",id:"developer/Topology_Discovery",title:"Topology Discovery",description:"This document describes Terragraph's topology discovery feature.",source:"@site/../docs/developer/Topology_Discovery.md",sourceDirName:"developer",slug:"/developer/Topology_Discovery",permalink:"/docs/developer/Topology_Discovery",editUrl:"https://github.com/terragraph/meta-terragraph/edit/main/docs/../docs/developer/Topology_Discovery.md",tags:[],version:"current",frontMatter:{},sidebar:"developerManualSidebar",previous:{title:"Prefix Allocation",permalink:"/docs/developer/Prefix_Allocation"},next:{title:"Stats, Events, Logs",permalink:"/docs/developer/Stats_Events_Logs"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Single-Node Topology Scan",id:"single-node-topology-scan",level:2},{value:"Network-Wide Topology Discovery",id:"network-wide-topology-discovery",level:2},{value:"Discovery Algorithm",id:"discovery-algorithm",level:3},{value:"Scan Parameters",id:"scan-parameters",level:4},{value:"Scan Loop",id:"scan-loop",level:4},{value:"Processing Results",id:"processing-results",level:4},{value:"Link Discovery",id:"link-discovery",level:2},{value:"Continuous Topology Scan",id:"continuous-topology-scan",level:2},{value:"Radio Alignment Using Continuous Topology Scans",id:"radio-alignment-using-continuous-topology-scans",level:3}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"topology-discovery"},"Topology Discovery"),(0,r.kt)("p",null,"This document describes Terragraph's topology discovery feature."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TopologyBuilderApp"),' orchestrates the high-level topology discovery algorithm,\nwhich extends the topology by incrementally adding and establishing links to\nresponding nodes. The main piece of the algorithm is the broadcast beamforming\nprotocol, or "topology scan" (refer to ',(0,r.kt)("a",{parentName:"p",href:"/docs/developer/Scans"},"Scans")," for further details)."),(0,r.kt)("p",null,"There are currently three actions available in ",(0,r.kt)("inlineCode",{parentName:"p"},"TopologyBuilderApp"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Running a single-node topology scan, and receiving results synchronously."),(0,r.kt)("li",{parentName:"ol"},"Coordinating a network-wide topology discovery."),(0,r.kt)("li",{parentName:"ol"},"Coordinating a link discovery within a search radius.")),(0,r.kt)("p",null,"These actions are outlined in the sections below."),(0,r.kt)("h2",{id:"single-node-topology-scan"},"Single-Node Topology Scan"),(0,r.kt)("p",null,"The goal of the single-node topology scan command is to provide a synchronous\nwrapper over ",(0,r.kt)("inlineCode",{parentName:"p"},"ScanApp"),"'s API, along with more detailed response data.\n",(0,r.kt)("inlineCode",{parentName:"p"},"TopologyBuilderApp")," goes through the following steps upon receiving a\n",(0,r.kt)("inlineCode",{parentName:"p"},"START_TOPOLOGY_SCAN")," command:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Send a ",(0,r.kt)("inlineCode",{parentName:"li"},"START_SCAN")," request to ",(0,r.kt)("inlineCode",{parentName:"li"},"ScanApp"),". If successful, ",(0,r.kt)("inlineCode",{parentName:"li"},"ScanApp")," will reply\nwith a ",(0,r.kt)("inlineCode",{parentName:"li"},"START_SCAN_RESP"),' message containing a unique scan identifier (or\n"token") that will be used to tag the scan results.'),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"ScanApp")," forwards all topology scan results to ",(0,r.kt)("inlineCode",{parentName:"li"},"TopologyBuilderApp")," in the\n",(0,r.kt)("inlineCode",{parentName:"li"},"TOPOLOGY_SCAN_RESULT")," message. Process the raw scan results and return a\n",(0,r.kt)("inlineCode",{parentName:"li"},"START_TOPOLOGY_SCAN_RESP")," response to the original sender.")),(0,r.kt)("p",null,"Scan result processing is handled within\n",(0,r.kt)("inlineCode",{parentName:"p"},"TopologyBuilder::processTopologyScanResult()"),". For each responder, this finds\nthe ",(0,r.kt)("em",{parentName:"p"},"strongest beam")," with the ",(0,r.kt)("em",{parentName:"p"},"smallest beam angle")," using the\ninitiator-to-responder LQM (link quality metric) matrix. This also identifies\nthe nearest site in the topology via GPS distance."),(0,r.kt)("h2",{id:"network-wide-topology-discovery"},"Network-Wide Topology Discovery"),(0,r.kt)("p",null,"The following user operations are available for managing network-wide topology\ndiscovery scans:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"User Operation"),(0,r.kt)("th",{parentName:"tr",align:null},"Command"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Start Scans"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"START_NETWORK_TOPOLOGY_SCAN"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stop Scans"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STOP_NETWORK_TOPOLOGY_SCAN"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Get Status"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GET_NETWORK_TOPOLOGY_SCAN_STATUS"))))),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"inputs")," to the procedure are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sites")," - All site locations should be added to the topology beforehand\n(responding nodes are matched to the nearest site)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Links between sites")," - Site-level link information (",(0,r.kt)("inlineCode",{parentName:"li"},"thrift::SiteLink"),")\nprovided in the request will determine which links to form.")),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"outputs")," of the procedure are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Nodes")," - All responder nodes and adjacent nodes/radios on the same site\nwill be added to the topology."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Links between nodes")," - Node-level link information will be added to the\ntopology.")),(0,r.kt)("p",null,"The current implementation is heavily dependent on GPS accuracy to match\nresponder nodes to sites in the topology, and does not run scans in parallel."),(0,r.kt)("h3",{id:"discovery-algorithm"},"Discovery Algorithm"),(0,r.kt)("p",null,"The topology discovery algorithm resides in ",(0,r.kt)("inlineCode",{parentName:"p"},"TopologyBuilder"),", which contains\nthree main methods for handling a network-wide topology scan:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initNetworkTopologyScan()")," - Queues all sites specified in the scan request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"networkTopologyScanLoop()")," - Advances the algorithm."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"handleScanResult()")," - Stores a topology scan result.")),(0,r.kt)("p",null,"The scan loop is invoked once to initiate the scan, and then asynchronously upon\nreceiving new scan results or hitting a timeout. Sites are removed from the scan\nqueue after processing all scan results for the site. The loop terminates when\nthe site queue is empty."),(0,r.kt)("p",null,"Scan progress is recorded throughout the procedure and returned via the\n",(0,r.kt)("inlineCode",{parentName:"p"},"thrift::NetworkTopologyScanStatus")," structure. This data persists in memory\nuntil another scan is started."),(0,r.kt)("h4",{id:"scan-parameters"},"Scan Parameters"),(0,r.kt)("p",null,"Scans are initiated via a ",(0,r.kt)("inlineCode",{parentName:"p"},"StartNetworkTopologyScan")," request. The only required\nparameter is the list of all ",(0,r.kt)("em",{parentName:"p"},"site links"),", which ",(0,r.kt)("inlineCode",{parentName:"p"},"TopologyBuilder")," uses to build\nits ",(0,r.kt)("em",{parentName:"p"},"site queue")," (of ",(0,r.kt)("inlineCode",{parentName:"p"},"SiteQueueEntry")," entries)."),(0,r.kt)("p",null,"The other tunable parameters are described below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MAC addresses")," - If provided, only these specific MAC addresses may be\nadded to the topology, and other radios ignored. This is primarily used for\ntesting purposes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CN sites")," - All nodes added on the given sites will be labeled as CNs\n(otherwise DNs)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Y-street sites")," - DN radios on the given sites will be allowed to form two\nDN-to-DN links (otherwise not allowed)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Beam angle penalty")," - A coefficient penalizing high beam angles at the\ntransmitter or receiver when deciding the best link to form, because\nproperly-aligned P2P links should normally be close to boresight. This penalty\nis not applied to P2MP sites, since the beam angle should ",(0,r.kt)("em",{parentName:"li"},"average")," to zero\ndegrees across all links of a P2MP radio. The default penalty of ",(0,r.kt)("em",{parentName:"li"},"0.1")," would\npenalize a combined beam angle (i.e. sum of the absolute values of transmit\nand receive angles) of 45 degrees by an SNR of 4.5dB."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Distance threshold")," - The maximum distance, in meters, to allow between a\nresponder's reported GPS position and the nearest site in order to compensate\nfor GPS inaccuracies. Nodes located further away are ignored. The default\ndistance threshold is ",(0,r.kt)("em",{parentName:"li"},"50 meters"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SNR threshold")," - The minimum signal-to-noise ratio, in decibels, to allow\non new links. The default SNR threshold of ",(0,r.kt)("em",{parentName:"li"},"6.1dB")," is the minimum needed to\nsupport MCS2 at a packet error rate of 1e-3."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Scans per node")," - A scan request can be issued to each radio multiple times\nto increase the likelihood of picking up all responders.")),(0,r.kt)("h4",{id:"scan-loop"},"Scan Loop"),(0,r.kt)("p",null,"The scan loop determines the next action to perform based on the current site\nqueue state. It returns an ",(0,r.kt)("inlineCode",{parentName:"p"},"Action")," structure encapsulating the results for\n",(0,r.kt)("inlineCode",{parentName:"p"},"TopologyBuilderApp")," to then execute."),(0,r.kt)("p",null,"Starting at the site at the head of the queue, the loop proceeds as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Find any DN left to scan on the site. The DN must be alive; to account for\nconfiguration-related reboots, the controller must have received a status\nreport at least 3 seconds after a configuration change was pushed to the node.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If any valid DN was found, send it a topology scan request and wait for a\nresponse.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Upon receiving scan results, store them and invoke the loop again."),(0,r.kt)("li",{parentName:"ul"},"Upon a timeout, invoke the loop again."))),(0,r.kt)("li",{parentName:"ul"},"If no valid DN was found, check the following cases:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If no scan results have been received so far, push the site to the\nbottom of the queue and continue (a node may come online later)."),(0,r.kt)("li",{parentName:"ul"},"If any DN left to scan on the site was recently online (within 90\nseconds), wait because it may come back online soon (e.g. rebooting)."),(0,r.kt)("li",{parentName:"ul"},"Otherwise, process the scan results for the site (see below). If all\nsite links have formed, remove the site from the queue; otherwise,\nre-add the site to the bottom of the queue."))))),(0,r.kt)("li",{parentName:"ul"},"Upon reaching the end of the queue, terminate if the queue is empty, or wait\n5 seconds if any sites remain.")),(0,r.kt)("h4",{id:"processing-results"},"Processing Results"),(0,r.kt)("p",null,"After collecting all scan results for a site, responders are filtered out\nthrough any of the following conditions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The responder didn't report a GPS location (possibly a transient issue)."),(0,r.kt)("li",{parentName:"ul"},"No site link should form between the current site and the responder's site."),(0,r.kt)("li",{parentName:"ul"},"The responder's MAC address did not match the input filter, if any."),(0,r.kt)("li",{parentName:"ul"},"The responder does not meet distance or SNR thresholds."),(0,r.kt)("li",{parentName:"ul"},"The responder is already part of the topology ",(0,r.kt)("em",{parentName:"li"},"and")," already has the maximum\nnumber of links defined."),(0,r.kt)("li",{parentName:"ul"},"The responder is another radio on the node that initiated the scan."),(0,r.kt)("li",{parentName:"ul"},"The responder is already part of a different site (due to past or present GPS\nerrors).")),(0,r.kt)("p",null,"The remaining responders are grouped by their nearest site; site links are added\nin a greedy manner, where ",(0,r.kt)("em",{parentName:"p"},"link quality")," is defined as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"link quality := SNR - (beam angle penalty * combined beam angle)\n")),(0,r.kt)("p",null,"The chosen responders, their wired adjacencies (if applicable), and the\nassociated wireless links are added to the topology via a ",(0,r.kt)("inlineCode",{parentName:"p"},"BULK_ADD")," request to\n",(0,r.kt)("inlineCode",{parentName:"p"},"TopologyApp"),"."),(0,r.kt)("h2",{id:"link-discovery"},"Link Discovery"),(0,r.kt)("p",null,"Link discovery scans aim to find the best possible link(s) from an existing node\nto a newly-installed node, issuing topology scans from each DN within a given\nradius. This is implemented using most of the same logic as topology discovery\nscans, but as only a single step (i.e. only the initial set of sites is\nenqueued)."),(0,r.kt)("p",null,"The following user operations are available for managing link discovery scans:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"User Operation"),(0,r.kt)("th",{parentName:"tr",align:null},"Command"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Start Scans"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"START_LINK_DISCOVERY_SCAN"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stop Scans"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STOP_NETWORK_TOPOLOGY_SCAN"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Get Status"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"GET_LINK_DISCOVERY_SCAN_STATUS"))))),(0,r.kt)("p",null,"The output is a list of all possible links found; no topology changes are made\nautomatically."),(0,r.kt)("h2",{id:"continuous-topology-scan"},"Continuous Topology Scan"),(0,r.kt)("p",null,"Continuous topology scans can be used for physically aligning a responder node.\nThe purpose of the topology scan is to trigger a beamforming procedure on the\nresponder at a sweep rate of roughly 2 cycles per second (depending on firmware\nparameters)."),(0,r.kt)("p",null,'The "continuous" scan is implemented by running regular scans back-to-back,\nscheduling them about 4 seconds in advance\n(',(0,r.kt)("inlineCode",{parentName:"p"},"FLAGS_continuous_topo_scan_start_time_offset_s"),") and about 1.8s apart (as\ncomputed with ",(0,r.kt)("inlineCode",{parentName:"p"},"ibfNumberOfBeams=31"),", or overridden via\n",(0,r.kt)("inlineCode",{parentName:"p"},"FLAGS_continuous_topo_scan_bwgd_delta"),"). In this example, there would be a\ncycle consisting of ~1.5s of sweeping followed by a ~300ms gap."),(0,r.kt)("p",null,"The following user operations are available for managing continuous topology\nscans:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"User Operation"),(0,r.kt)("th",{parentName:"tr",align:null},"Command"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Start/Stop Scans"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"START_CONTINUOUS_TOPO_SCAN"))))),(0,r.kt)("p",null,"An ongoing scan can be interrupted by sending another request with a duration of\nzero."),(0,r.kt)("h3",{id:"radio-alignment-using-continuous-topology-scans"},"Radio Alignment Using Continuous Topology Scans"),(0,r.kt)("p",null,"A continuous topology scan will continuously sweep through all (Tx, Rx) beam\ncombinations between the topology scan initiator (Tx beam sweep) and topology\nscan responder(s) (Rx beam sweep). The beamforming stats (",(0,r.kt)("inlineCode",{parentName:"p"},"TGF_STATS_BF"),") at the\nresponder(s) can then be inspected to give quick alignment feedback, providing\nhigher layers with SNR/RSSI measurements for every packet detected. Note that\nonly a few of the (Tx, Rx) beam combinations detected at the responder(s) are\nsent back to the initiator, so in general the information available at the\ninitiator is not enough to use for a robust alignment procedure."),(0,r.kt)("p",null,"Beamforming stats at each responder node contain the full heatmap of (Tx, Rx)\nbeam combinations, which can be used to determine the current angle of arrival\nat the responder. As a simple example, if the (Tx, Rx) beam combination with\nhighest SNR at the responder corresponds to an Rx angle of +10 degrees relative\nboresight, an installer could be instructed to rotate the responder node by +10\ndegrees so that the responder's boresight is aligned to the line-of-sight path\nto the initiator node. The beamforming stats can optionally be post-processed to\nimprove robustness, for example by averaging across packets in the time and/or\nspatial domain, or by adding logic to distinguish reflections from the\nline-of-sight path."),(0,r.kt)("p",null,"Note that the host processor and software stack must be able to consume the high\nvolume of ",(0,r.kt)("inlineCode",{parentName:"p"},"TGF_STATS_BF")," stats generated by firmware to avoid loss. This can be\non the order of thousands of samples per second. Refer to\n",(0,r.kt)("a",{parentName:"p",href:"/docs/developer/Firmware_Stats"},"Firmware Stats")," for a full list of available beamforming\nstats."))}m.isMDXComponent=!0}}]);