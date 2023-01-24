import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { NodeService } from 'src/app/Servicess/node.service';

@Component({
  selector: 'app-tree-select',
  templateUrl: './tree-select.component.html',
  styleUrls: ['./tree-select.component.css'],
  providers: [MessageService]
})
export class TreeSelectComponent {
  nodes1!: any[];

  nodes2!: any[];

  nodes3!: any[];

  selectedNodes1: any[] = [];

  selectedNodes2: any[] = [];

  selectedNode: any;

  constructor(public nodeService: NodeService) { }

  ngOnInit() {
      this.nodeService.getFiles().then(files => this.nodes1 = files);
      this.nodeService.getFiles().then(files => this.nodes2 = files);
      this.nodeService.getFiles().then(files => this.nodes3 = files);
  }    
}
