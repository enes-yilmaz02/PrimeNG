import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from 'src/app/Servicess/node.service';

@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  styleUrls: ['./tree-table.component.css']
})
export class TreeTableComponent {
  files1!: TreeNode[];

  files2!: TreeNode[];

  cols!: any[];

  constructor(private nodeService: NodeService) { }

  ngOnInit() {
      this.nodeService.getFilesystem().then(files => this.files1 = files);
      this.nodeService.getFilesystem().then(files => this.files2 = files);

      this.cols = [
          { field: 'name', header: 'Name' },
          { field: 'size', header: 'Size' },
          { field: 'type', header: 'Type' }
      ];
  }
}
