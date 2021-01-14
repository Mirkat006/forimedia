import * as vscode from 'vscode';
import { LeaderboardPanel } from './LeaderboardPanel';
import { SidebarProvider } from './SidebarProvider';

export function activate(context: vscode.ExtensionContext) {
  const sidebarProvider = new SidebarProvider(context.extensionUri);

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(
      'flappy-code-sidebar',
      sidebarProvider
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('flappy-code.leaderboard', function () {
      LeaderboardPanel.createOrShow(context.extensionUri);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('flappy-code.refresh', async function () {
      // LeaderboardPanel.kill();
      // LeaderboardPanel.createOrShow(context.extensionUri);

      await vscode.commands.executeCommand('workbench.action.closeSidebar');
      await vscode.commands.executeCommand(
        'workbench.view.extension.flappy-code-sidebar-view'
      );
      // setTimeout(function () {
      //   vscode.commands.executeCommand(
      //     'workbench.action.webview.openDeveloperTools'
      //   );
      // }, 500);
    })
  );
}

export function deactivate() {}
