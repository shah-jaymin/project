import React, { Component } from 'react';
import { EuiIcon, EuiTreeView, } from '@elastic/eui';
import {Link} from 'react-router-dom';


export class TreeView extends Component {
    showAlert = () => {
        alert('You squashed a bug!');
      };
    
      render() {
        const items = [
          {
            label:<Link to='/facultyDashboard'>Dashboard</Link>,
            id: 'dashboard',
          },
          {
            label: <Link to='/facultyDashboard/subjects'>Subjects</Link>,
            id: 'dashboard',
            
          },
          {
            label: 'Assignment',
            id: 'assign',
            icon: <EuiIcon type="folderClosed" />,
            iconWhenExpanded: <EuiIcon type="folderOpen" />,
            isExpanded: true,
            children: [
              {
                label: <Link to='/facultyDashboard/viewAssignment'>View Assign</Link>,
                id: 'viewAssign',
                icon: <EuiIcon type="document" />,
              },
              {
                label: <Link to='/facultyDashboard/gradeAssignment'>Grade Assign</Link>,
                id: 'gradeAssign',
                icon: <EuiIcon type="document" />,
                
              },
            ],
          },
          {
            label: 'Test',
            id: 'test',
            icon: <EuiIcon type="folderClosed" />,
            iconWhenExpanded: <EuiIcon type="folderOpen" />,
            isExpanded: true,
            children: [
              {
                label: <Link to='/facultyDashboard/addtest'>Add Test</Link>,
                id: 'addtest',
                icon: <EuiIcon type="document" />,
              },
              {
                label: 'View Test',
                id: 'viewTest',
                icon: <EuiIcon type="document" />,
              },
            ],
          },
          {
            label: 'Forum',
            id: 'forum',
            icon: <EuiIcon type="folderClosed" />,
            iconWhenExpanded: <EuiIcon type="folderOpen" />,
            isExpanded: true,
            children: [
              {
                label: <Link to='/facultyDashboard/Forum'>Forum</Link>,
                id: 'forum',
                icon: <EuiIcon type="document" />,
              },
              {
                label: <Link to='/facultyDashboard/generalforum'>General Forum</Link>,
                id: 'generalForum',
                icon: <EuiIcon type="document" />,
              },
              {
                label: <Link to='/facultyDashboard/lessonforum'>Lesson Forum</Link>,
                id: 'lessonForum',
                icon: <EuiIcon type="document" />,
              },
            ],
          },
        ];
    
        return (
          <div style={{ width: '13rem' }}>
            <EuiTreeView items={items} aria-label="Sample Folder Tree" />
          </div>
        );
      }
    }

export default TreeView;
