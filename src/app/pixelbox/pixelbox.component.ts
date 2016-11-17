import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pixelbox',
  templateUrl: './pixelbox.component.html',
  inputs: ['numbers'],
  styleUrls: ['./pixelbox.component.css']
})
export class PixelboxComponent implements OnInit {
  @Output() addPixel: EventEmitter<any> = new EventEmitter<any>();
  @Input() timerStarted: any;
  @Input() activePixels: any;

  white: any = [
    111, 240, 332, 510, 547, 683, 733, 854, 863
  ]
  brown: any = [
    1165, 1166, 1167, 1168, 1169, 1209, 1210, 1211, 1212, 1213
  ]
  orn_green: any = [
    241, 284, 285, 684, 727, 728
  ]
  blue: any = [
    855, 898, 899, 864, 907, 908
  ]
  red: any = [
    333, 376, 377, 734, 777, 778
  ]
  yellow: any = [
    67, 110, 112, 155, 511, 554, 555, 548, 591, 592
  ]
  black: any = [
    153, 196, 239, 282, 325, 368, 412, 457, 458, 459, 460, 501, 
    544, 587, 630, 674, 677, 719, 720, 763, 806, 157, 202, 247, 
    292, 337,382, 426, 423, 468, 469, 513, 558, 603, 648, 692, 690, 
    689, 688, 687, 642, 641, 640, 595, 551, 506, 505, 735, 779, 824, 
    849, 892, 869, 914, 936, 958, 1001, 1045, 1088, 1070, 1025, 981, 1131, 
    1130, 1129, 1128, 1127, 1126, 1125, 1124, 1123, 1122, 1121, 1120, 
  1119, 1118, 1117, 1116, 1115, 947, 991, 1033, 1034, 1036, 1037, 988, 994,
  942, 943, 951, 952, 810, 811, 819, 820, 853, 897, 862, 865, 906, 909,
  856, 900, 1164, 1208, 1170, 1214, 1253, 1254, 1255, 1256, 1257
  ]
  green: any = [
    154, 156, 197, 198, 199, 200, 201, 242, 243, 244, 245, 246,
  283, 286, 287, 288, 289, 290, 291, 326, 327, 328, 329, 330, 
  331, 334, 335, 336, 369, 370, 371, 372, 373, 374, 375, 378, 
  379, 380, 381, 413, 414, 415, 416, 417, 418, 419, 420, 421, 
  422, 424, 425, 461, 462, 463, 464, 465, 466, 467, 502, 503, 
  504, 507, 508, 509, 512, 545, 546, 549, 550, 552, 553, 556, 
  557, 588, 589, 590, 593, 594, 596, 597, 598, 599, 600, 601, 
  602, 631, 632, 633, 634, 635, 636, 637, 638, 639, 643, 644, 
  645, 646, 647, 675, 676, 678, 679, 680, 681, 682, 685, 686, 
  691, 721, 722, 723, 724, 725, 726, 729, 730, 731, 732, 764, 
  765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 
  807, 808, 809, 812, 813, 814, 815, 816, 817, 818, 821, 822, 
  823, 850, 851, 852, 857, 858, 859, 860, 861, 866, 867, 868,
  893, 894, 895, 896, 901, 902, 903, 904, 905, 910, 911, 912, 
  913, 937, 938, 939, 940, 941, 944, 945, 946, 948, 949, 950, 
  953, 954, 955, 956, 957, 982, 983, 984, 985, 986, 987, 989, 
  990, 992, 993, 995, 996, 997, 998, 999, 1000, 1026, 1027, 1028, 
  1029, 1030, 1031, 1032, 1035, 1038, 1039, 1040, 1041, 1042, 
  1043, 1044, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 
  1081, 1082, 1083, 1084, 1085, 1086, 1087
  ]

  constructor() { 
  }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.timerStarted == 'true'){
      this.addPixels();
    }

    console.log(this.activePixels);

    // Every time a pixel is added with above function in parent, it is
    // added to 'active Pixels' which trickles down to child. There needs
    // to be a variable class that changes.
    // If element's id is in 'active Pixels', add class active.
  }

  getOriginalClass(element){
    if (this.green.indexOf(element) > -1 ){
      return 'tree-green'
    }
  }

  getClass(element){
    var intElement = parseInt(element)
    if (this.green.indexOf(intElement) > -1 && this.activePixels.indexOf(intElement) > -1 ){
      return 'tree-green'
    }
  }

  // Trigger this function somehow when timer button is pressed
  addPixels(){
  	var x = 1;
  	while(x != 13210000){ 
  		this.addPixel.emit(x);
  		x++;
  	}
  }

}
